import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Run the shipped script against a small DOM surface to exercise motion fallback
// and chapter transitions without requiring a browser dependency.
function page() {
  const element=()=>({
    attributes:new Map(), values:new Map(), classes:new Set(),
    setAttribute(name,value){this.attributes.set(name,value)},
    removeAttribute(name){this.attributes.delete(name)},
    get style(){return {setProperty:(name,value)=>this.values.set(name,value)}},
    get classList(){return {toggle:(name,on)=>on?this.classes.add(name):this.classes.delete(name),remove:name=>this.classes.delete(name)}}
  });
  const steps=Array.from({length:3},element);
  const story=element(), root=element(), hero=element();
  const number={textContent:''};
  let storyTop=90;
  story.querySelectorAll=()=>steps;
  story.querySelector=selector=>selector==='[data-story-number]'?number:{offsetHeight:710};
  story.getBoundingClientRect=()=>({top:storyTop,height:2000});
  root.scrollHeight=5000;
  const events=new Map();
  const preference={matches:false,addEventListener:(name,fn)=>events.set('motion',fn)};
  const context={
    document:{documentElement:root,getElementById:()=>null,querySelector:selector=>selector==='[data-scroll-story]'?story:selector==='[data-parallax]'?hero:null,querySelectorAll:()=>[]},
    window:{matchMedia:()=>preference},innerHeight:800,scrollY:0,
    addEventListener:(name,fn)=>events.set(name,fn),requestAnimationFrame:fn=>fn(),
    getComputedStyle:()=>({getPropertyValue:()=> '90px'})
  };
  vm.runInNewContext(fs.readFileSync(new URL('../public/app.js',import.meta.url),'utf8'),context);
  return {steps,story,root,hero,number,preference,context,events,scroll(progress){storyTop=90-progress*1290;context.scrollY=progress*4200;events.get('scroll')()}};
}
test('scrolling forward and backward selects one accessible chapter',()=>{
  const p=page();
  for(const [progress,chapter] of [[0,0],[.5,1],[1,2],[.4,1],[0,0]]){
    p.scroll(progress);
    assert.equal(p.number.textContent,String(chapter+1));
    assert.deepEqual(p.steps.map(s=>s.attributes.get('aria-hidden')),p.steps.map((_,i)=>String(i!==chapter)));
    assert.equal(p.steps.filter(s=>s.classes.has('is-active')).length,1);
  }
});
test('reduced motion exposes every chapter and removes parallax',()=>{
  const p=page();p.scroll(.7);p.preference.matches=true;p.events.get('motion')();
  assert.equal(p.story.classes.has('is-enhanced'),false);
  assert.ok(p.steps.every(s=>!s.attributes.has('aria-hidden')));
  assert.equal(p.hero.values.get('--parallax'),'0px');
});
test('short landscape screens use the readable static story',()=>{
  const p=page();p.context.innerHeight=500;p.events.get('resize')();
  assert.equal(p.story.classes.has('is-enhanced'),false);
  assert.ok(p.steps.every(s=>!s.attributes.has('aria-hidden')));
});
test('document progress is clamped at both ends',()=>{
  const p=page();p.scroll(2);assert.equal(p.root.values.get('--scroll'),'1');
  p.scroll(-1);assert.equal(p.root.values.get('--scroll'),'0');
});
