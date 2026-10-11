import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const paths=[];
function walk(p){for(const x of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,x.name);if(x.isDirectory())walk(f);else if(x.name==='index.html')paths.push(f);}}
walk(root);
let errors=[];
for(const file of paths){
 const html=fs.readFileSync(file,'utf8');
 if(!/<html lang="(?:en|si)"/.test(html) && file!==path.join(root,'index.html'))errors.push(`Invalid language ${file}`);
 if(!html.includes('hreflang="si"')&&file!==path.join(root,'index.html'))errors.push(`No SI lang alternate ${file}`);
 if(!html.includes('<title>'))errors.push(`No title ${file}`);
 const hrefs=[...html.matchAll(/href="(\/(?:en|si)\/[^"?#]*)"/g)].map(m=>m[1]);
 for(const href of hrefs){const out=path.join(root,href,'index.html');if(!fs.existsSync(out))errors.push(`Broken link ${href} from ${file}`);}
 const images=[...html.matchAll(/src="(\/images\/[^\"]+)"/g)].map(m=>m[1]);
 for(const url of images)if(!fs.existsSync(path.join(root,url)))errors.push(`Image missing ${url}`);
}
console.log(`Checked ${paths.length} generated index files. Broken links/assets: ${errors.length}`);
if(errors.length){console.error(errors.slice(0,15).join('\n'));process.exit(1)}
