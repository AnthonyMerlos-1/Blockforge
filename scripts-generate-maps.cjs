const fs=require('fs'),vm=require('vm'),THREE=require('./public/js/three.min.js');
const source=fs.readFileSync('public/js/game.js','utf8');
const a=source.indexOf('const maps=['),b=source.indexOf('\n\n',a);
const start=source.indexOf('function makeMapWorld(m)'),end=source.indexOf('\n\n',start);
const ctx={THREE};vm.createContext(ctx);vm.runInContext(source.slice(a,b)+';globalThis.defs=maps;'+source.slice(start,end),ctx);
const definitions=ctx.defs.map(m=>{const g=ctx.makeMapWorld(m);return {id:m.id,name:m.name,colliders:g.userData.colliders,bounds:g.userData.bounds,water:g.userData.water}});
fs.writeFileSync('server/maps.json',JSON.stringify(definitions));
