import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const dist=path.join(root,'dist');
const css=fs.readFileSync(path.join(dist,'styles.css'),'utf8');
const js=fs.readFileSync(path.join(dist,'app.js'),'utf8');
const imgnames=fs.readdirSync(path.join(dist,'images')).filter(name=>fs.statSync(path.join(dist,'images',name)).isFile());
const mimeFor=name=>name.endsWith('.jpg')||name.endsWith('.jpeg')?'image/jpeg':name.endsWith('.svg')?'image/svg+xml':'image/png';
const imgData={};
for(const name of imgnames)imgData[name]=`data:${mimeFor(name)};base64,`+fs.readFileSync(path.join(dist,'images',name)).toString('base64');
let styles=css;
for(const name of imgnames)styles=styles.replaceAll(`url('/images/${name}')`,`url('${imgData[name]}')`);
for(const [locale,outName] of [['en','4Z_Gym_English_Design_Preview.html'],['si','4Z_Gym_Sinhala_Design_Preview.html']]){
 let html=fs.readFileSync(path.join(dist,locale,'index.html'),'utf8');
 html=html.replace('<link rel="stylesheet" href="/styles.css">',`<style>${styles}</style>`);
 // Keep the real site's Google Fonts stylesheet so preview typography matches production.
 for(const name of imgnames){
  html=html.replaceAll(`src="/images/${name}"`,`src="${imgData[name]}"`);
  // Inline CSS-background URLs in HTML attributes as well; otherwise file:// previews
  // resolve /images/* against the machine root and the hero background disappears.
  html=html.replaceAll(`url('/images/${name}')`,`url('${imgData[name]}')`);
  html=html.replaceAll(`url("/images/${name}")`,`url('${imgData[name]}')`);
 }
 // Standalone preview keeps its homepage section navigation; full routing lives in the deployable project.
 html=html.replaceAll(`href="/${locale}/"`,'href="#top"');
 html=html.replaceAll(`href="/${locale==='en'?'si':'en'}/"`, `href="${locale==='en'?'4Z_Gym_Sinhala_Design_Preview.html':'4Z_Gym_English_Design_Preview.html'}"`);
 const routeTargets={'about':'#top','asanka-rajitha':'#founder','locations':'#locations','programs':'#programs','memberships':'#memberships','gallery':'#locations','contact':'mailto:4zgymsl@gmail.com'};
 for(const [route,target] of Object.entries(routeTargets)){
  html=html.replaceAll(`href="/${locale}/${route}/"`,`href="${target}"`);
 }
 html=html.replace('<body data-lang=', '<body id="top" data-lang=');
 html=html.replace('<script src="/app.js" defer></script>',`<script>${js.replaceAll('</script>','<\\/script>')}</script>`);
 fs.writeFileSync(path.join('/mnt/data',outName),html);
 console.log('Wrote',outName,Math.round(fs.statSync(path.join('/mnt/data',outName)).size/1024)+' KB');
}
