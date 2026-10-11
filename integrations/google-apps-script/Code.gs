/**
 * OPTIONAL: 4Z Gym inquiry notifications using its existing Gmail account.
 * 1. Sign in as 4zgymsl@gmail.com at script.google.com.
 * 2. New project; paste this file.
 * 3. Project Settings > Script Properties > add GYM_WEBHOOK_SECRET = random long string.
 * 4. Deploy > New deployment > Web app; execute as Me, access Anyone.
 * 5. Copy the /exec URL to Vercel GOOGLE_SCRIPT_WEBHOOK_URL and the secret to GOOGLE_SCRIPT_SECRET.
 * 6. Submissions still save FIRST in Supabase. Script only handles email notifications.
 * IMPORTANT: Treat deployed /exec URL and secret as sensitive and rotate if exposed.
 */
function doPost(e) {
  try {
    var input = JSON.parse(e.postData.contents || '{}');
    var expected = PropertiesService.getScriptProperties().getProperty('GYM_WEBHOOK_SECRET');
    if (!expected || input.key !== expected) return jsonResponse_({ok:false,error:'unauthorized'});
    if (!input.text || !input.subject || String(input.text).length > 5000) return jsonResponse_({ok:false,error:'invalid'});
    var mail = {
      to:'4zgymsl@gmail.com',
      subject:String(input.subject).slice(0,150),
      body:String(input.text),
      name:'4Z Gym Website'
    };
    if(input.replyTo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.replyTo)) mail.replyTo=String(input.replyTo);
    MailApp.sendEmail(mail);
    return jsonResponse_({ok:true});
  } catch (err) {
    console.error(err);
    return jsonResponse_({ok:false,error:'send_failed'});
  }
}
function jsonResponse_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
