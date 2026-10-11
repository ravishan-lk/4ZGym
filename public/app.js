(() => {
  'use strict';
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if(menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const next = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(next));
      mobileNav.hidden = !next;
      menuToggle.setAttribute('aria-label',next?'Close menu':'Open menu');
    });
    document.addEventListener('keydown', e => {
      if(e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.click();menuToggle.focus();
      }
    });
  }
  // Branch choice changes the inquiry destination context, not unverified prices.
  document.querySelectorAll('.membership-branch-choice').forEach(container => {
    container.querySelectorAll('[data-branch-filter]').forEach(button => {
      button.addEventListener('click', () => {
        const branch=button.dataset.branchFilter;
        container.querySelectorAll('[data-branch-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
        const grid=container.nextElementSibling;
        grid?.querySelectorAll('a.price-btn').forEach(link=>{
          const u=new URL(link.href,location.href);
          u.searchParams.set('branch',branch);
          link.href=u.toString();
        });
      });
    });
    const defaultButton=container.querySelector('[data-branch-filter="eheliyagoda"]');
    defaultButton?.click();
  });
  // Insert values from selected plan/branch CTA into the contact form.
  const form = document.querySelector('[data-inquiry-form]');
  if(!form) return;
  const si = document.body.dataset.lang === 'si';
  const params = new URLSearchParams(location.search);
  for(const key of ['branch','interest','membership_plan']) {
    const queryKey = key === 'membership_plan' ? 'plan' : key;
    if(params.has(queryKey) && form.elements[key]) {
      const v = params.get(queryKey);
      if(key==='branch' && !['eheliyagoda','nawagamuwa'].includes(v)) continue;
      if(key==='interest' && !['general','visiting','member','personal','program'].includes(v)) continue;
      if(key==='membership_plan' && !['monthly','sixmonths','annual'].includes(v)) continue;
      form.elements[key].value=v;
    }
  }
  const date = form.elements['preferred_date'];
  if(date) date.min = new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0,10);
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const status=form.querySelector('.form-status');
    const submit=form.querySelector('[type=submit]');
    status.textContent='';
    const data=new FormData(form);
    const body=Object.fromEntries(data.entries());
    if(!form.checkValidity() || !body.consent) {
      form.reportValidity();
      status.textContent=si?'කරුණාකර අවශ්‍ය තොරතුරු සම්පූර්ණ කරන්න.':'Please fill in all required fields.';
      status.dataset.status='error';return;
    }
    body.consent=true;body.locale=si?'si':'en';
    submit.disabled=true;
    submit.style.opacity='.65';
    status.textContent=si?'යවමින්…':'Sending your request…';
    status.dataset.status='notice';
    try {
      const resp=await fetch('/api/inquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
      const result=await resp.json().catch(()=>({}));
      if(resp.ok && result.ok) {
        status.dataset.status=result.notificationSent?'success':'notice';
        status.textContent=result.notificationSent?(si?'ඉල්ලීම ලැබුණා. අපේ කණ්ඩායම ඔබව සම්බන්ධ කරගනී.':'Your request has been received. Our team will be in touch.'):(si?'ඉල්ලීම සුරක්ෂිතයි. හදිසි නම් දුරකථනයෙන් අමතන්න.':'Your request was saved. If urgent, please call us.');
        if(result.reference) status.textContent += `  #${result.reference.slice(0,8).toUpperCase()}`;
        form.reset();
      } else {
        status.dataset.status='error';
        status.textContent=resp.status===503?(si?'පෝරම සේවාව තවම සම්බන්ධ කර නැත. 076 072 3929 අමතන්න.':'Online forms are not yet activated. Please call 076 072 3929 or email 4zgymsl@gmail.com.'):(si?'ඉල්ලීම යැවීමට නොහැකි වුණා. නැවත උත්සාහ කරන්න.':'Could not submit the request. Please try again or contact 4Z Gym directly.');
      }
    } catch (err) {
      status.dataset.status='error';
      status.textContent=si?'සම්බන්ධතාවයේ ගැටලුවක්. කරුණාකර නැවත උත්සාහ කරන්න.':'A network error occurred. Please try again or call us.';
    } finally {submit.disabled=false;submit.style.opacity='1';}
  });
})();
