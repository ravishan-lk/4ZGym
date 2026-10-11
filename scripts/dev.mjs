import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const root=path.resolve('dist');
spawnSync(process.execPath,['scripts/build.mjs'],{stdio:'inherit'});
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript','.png':'image/png','.xml':'application/xml','.txt':'text/plain'};
const port=process.env.PORT||3000;
http.createServer((req,res)=>{
 const reqPath=decodeURIComponent((req.url||'/').split('?')[0]);
 if(reqPath.startsWith('/api/')) {res.writeHead(503,{'Content-Type':'application/json'});res.end(JSON.stringify({error:'Local preview server does not run Vercel functions. Deploy with Supabase/Resend credentials to enable submissions.'}));return;}
 const f=path.resolve(root,'.'+reqPath);
 if(!f.startsWith(root+path.sep)&&f!==root){res.writeHead(403);res.end();return;}
 const file=fs.existsSync(f)&&fs.statSync(f).isDirectory()?path.join(f,'index.html'):f;
 if(!fs.existsSync(file)){res.writeHead(404);res.end('Not Found');return;}
 res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});
 fs.createReadStream(file).pipe(res);
}).listen(port,'0.0.0.0',()=>console.log(`4Z Gym website: http://localhost:${port}/en/`));
