/** Vercel Node.js Serverless Function. Requires Supabase and optionally Resend. */
const RECIPIENT='4zgymsl@gmail.com';
const BRANCHES=new Set(['eheliyagoda','nawagamuwa']);
const INTERESTS=new Set(['general','visiting','member','personal','program']);
const PLANS=new Set(['monthly','sixmonths','annual']);
const safeText=(value,max=160)=>typeof value==='string'?value.trim().slice(0,max):'';
const emailValid=x=>!x||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
const json=(res,status,obj)=>res.status(status).setHeader('Cache-Control','no-store').json(obj);

export default async function handler(req,res){
  if(req.method!=='POST')return json(res,405,{ok:false,error:'method_not_allowed'});
  const dbUrl=(process.env.SUPABASE_URL||'').replace(/\/$/,'');
  const dbKey=process.env.SUPABASE_SERVICE_ROLE_KEY||'';
  if(!dbUrl||!dbKey)return json(res,503,{ok:false,error:'server_not_configured'});
  const origins=(process.env.ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean);
  if(origins.length){
    const origin=req.headers.origin||'';
    if(origin && !origins.includes(origin))return json(res,403,{ok:false,error:'origin_not_allowed'});
  }
  const raw=req.body;
  const body=typeof raw==='string'?(()=>{try{return JSON.parse(raw)}catch{return null}})():raw;
  if(!body||typeof body!=='object'||Array.isArray(body))return json(res,400,{ok:false,error:'invalid_payload'});
  // Honeypot field; deliberately give automated spam a generic response.
  if(body.website)return json(res,200,{ok:true,notificationSent:false});
  const name=safeText(body.name,90);
  const phone=safeText(body.phone,22);
  const email=safeText(body.email,160).toLowerCase();
  const branch=safeText(body.branch,40);
  const interest=safeText(body.interest,40);
  const membershipPlan=safeText(body.membership_plan,40)||null;
  const preferredDate=safeText(body.preferred_date,10)||null;
  const message=safeText(body.message,1200)||null;
  const locale=body.locale==='si'?'si':'en';
  const consent=body.consent===true;
  const phoneDigits=phone.replace(/[^\d]/g,'');
  if(name.length<2||!/[\p{L}]/u.test(name)||phoneDigits.length<9||phoneDigits.length>14||!emailValid(email)||!BRANCHES.has(branch)||!INTERESTS.has(interest)||(membershipPlan&&!PLANS.has(membershipPlan))||!consent){
    return json(res,400,{ok:false,error:'invalid_fields'});
  }
  if(preferredDate){
    const d=new Date(preferredDate+'T12:00:00Z');
    if(!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)||Number.isNaN(d.getTime())||d.toISOString().slice(0,10)!==preferredDate||d.getTime()<Date.now()-86400000){
      return json(res,400,{ok:false,error:'invalid_date'});
    }
  }
  const record={name,phone,email:email||null,branch,interest,membership_plan:membershipPlan,preferred_date:preferredDate,message,locale,consent,notification_status:'pending'};
  let reference;
  try{
    const r=await fetch(`${dbUrl}/rest/v1/gym_inquiries?select=id`,{
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':dbKey,'Authorization':`Bearer ${dbKey}`,'Prefer':'return=representation'},
      body:JSON.stringify(record),
      signal:AbortSignal.timeout(6500),
    });
    if(!r.ok){console.error('Supabase write failed',r.status,(await r.text()).slice(0,300));return json(res,502,{ok:false,error:'storage_error'});}
    const saved=await r.json();reference=saved?.[0]?.id;
    if(!reference)return json(res,502,{ok:false,error:'storage_reference_missing'});
  }catch(error){console.error('Database unavailable',String(error));return json(res,502,{ok:false,error:'storage_unavailable'});}
  let notificationSent=false;
  const contents=[
    `4Z Gym website ${interest==='visiting'?'visit request':'inquiry'}`,
    `Reference: ${reference}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email||'Not supplied'}`,
    `Branch: ${branch}`,
    `Interest: ${interest}`,
    `Membership: ${membershipPlan||'Not selected'}`,
    `Preferred visit date: ${preferredDate||'Not selected'}`,
    `Message: ${message||'No message'}`,
    `Language: ${locale}`,
  ].join('\n');
  const subject=`4Z Gym — ${branch} — ${interest} inquiry`;
  if(process.env.GOOGLE_SCRIPT_WEBHOOK_URL&&process.env.GOOGLE_SCRIPT_SECRET){
    try {
      // Gmail Apps Script is useful before a custom sender domain has been bought.
      const endpoint=process.env.GOOGLE_SCRIPT_WEBHOOK_URL;
      if(!/^https:\/\/script\.google\.com\/macros\/s\//.test(endpoint))throw new Error('Unexpected Apps Script URL');
      const send=await fetch(endpoint,{
        method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},
        body:JSON.stringify({key:process.env.GOOGLE_SCRIPT_SECRET,subject,text:contents,replyTo:email||undefined}),
        signal:AbortSignal.timeout(7500),
      });
      const response=await send.json().catch(()=>({}));
      notificationSent=send.ok&&response.ok===true;
      if(!notificationSent)console.error('Gmail Apps Script notification failed',send.status,response.error||'unknown');
    }catch(error){console.error('Gmail Apps Script unavailable',String(error));}
  } else if(process.env.RESEND_API_KEY && process.env.RESEND_FROM){
    try{
      const send=await fetch('https://api.resend.com/emails',{
        method:'POST',
        headers:{'Authorization':`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},
        body:JSON.stringify({from:process.env.RESEND_FROM,to:[RECIPIENT],subject,text:contents,...(email?{reply_to:email}:{})}),
        signal:AbortSignal.timeout(6500),
      });
      notificationSent=send.ok;
      if(!send.ok)console.error('Resend delivery failed',send.status,(await send.text()).slice(0,200));
    }catch(error){console.error('Email provider unavailable',String(error));}
  } else console.warn('Email notifications not configured; submission saved but no email notification.');
  // Best-effort update only. Saved inquiry remains authoritative even if notification fails.
  try{
    await fetch(`${dbUrl}/rest/v1/gym_inquiries?id=eq.${encodeURIComponent(reference)}`,{
      method:'PATCH',headers:{'Content-Type':'application/json','apikey':dbKey,'Authorization':`Bearer ${dbKey}`},
      body:JSON.stringify({notification_status:notificationSent?'sent':'failed',...(notificationSent?{notified_at:new Date().toISOString()}:{})}),
      signal:AbortSignal.timeout(2500),
    });
  }catch(error){console.error('Notification status update skipped',String(error));}
  return json(res,200,{ok:true,reference,notificationSent});
}
