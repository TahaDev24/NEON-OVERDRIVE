(()=>{'use strict';
const canvas=document.querySelector('#game'),ctx=canvas.getContext('2d'),overlay=document.querySelector('#overlay'),startBtn=document.querySelector('#startButton'),title=document.querySelector('#overlayTitle'),text=document.querySelector('#overlayText'),zoneLabel=document.querySelector('#zoneLabel'),coinLabel=document.querySelector('#coinLabel');
const W=960,H=540,GRAVITY=1900,ZONE_COUNT=10;let dpr=1,running=false,paused=false,raf=0,last=0,zone=1,coins=0,score=0,worldX=0;
const saveKey='neonOverdriveNextGenV2';let saved={unlocked:1,coins:0,cleared:[]};try{saved={...saved,...JSON.parse(localStorage.getItem(saveKey)||'{}')}}catch{}
zone=Math.max(1,Math.min(ZONE_COUNT,saved.unlocked||1));coins=saved.coins||0;
const keys=new Set(),touch=new Set();
const player={x:100,y:0,vx:0,vy:0,w:28,h:36,ground:false,alive:true};
let platforms=[],hazards=[],pickups=[],goal=0,boss=null;
function resize(){dpr=Math.min(devicePixelRatio||1,2);canvas.width=W*dpr;canvas.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}resize();addEventListener('resize',resize);
function save(){saved.coins=coins;saved.unlocked=zone;saved.cleared=[...new Set(saved.cleared||[])];localStorage.setItem(saveKey,JSON.stringify(saved));coinLabel.textContent='◆ '+String(coins).padStart(3,'0')}
function buildLevel(n){platforms=[];hazards=[];pickups=[];worldX=0;goal=4300+n*130;let x=0,y=430;platforms.push({x:0,y,w:420,h:30});for(let i=0;i<24+n;i++){x+=150+(i%4)*30;y=340+(Math.sin(i*1.4+n)*95);platforms.push({x,y,w:105+(i%3)*20,h:22});if(i%3===1)hazards.push({x:x+35,y:y-24,w:34,h:24});if(i%2===0)pickups.push({x:x+50,y:y-42,r:9,taken:false});}platforms.push({x:goal,y:420,w:220,h:30});if(n===10)boss={x:goal-240,y:300,w:90,h:120,hp:3,hit:false};else boss=null;player.x=80;player.y=330;player.vx=player.vy=0;player.ground=false;player.alive=true;zoneLabel.textContent='ZONE '+String(n).padStart(2,'0')}
function start(){if(zone===10&&!saved.cleared.includes(9)){zone=9}buildLevel(zone);overlay.classList.add('hidden');running=true;paused=false;last=performance.now();cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
function showOverlay(t,desc,button='RETRY'){running=false;cancelAnimationFrame(raf);title.innerHTML=t;text.textContent=desc;startBtn.innerHTML=button+' <span>↗</span>';overlay.classList.remove('hidden')}
function jump(){if(player.ground&&running){player.vy=-720;player.ground=false}}
function loop(now){if(!running)return;const dt=Math.min((now-last)/1000,.033);last=now;update(dt);render();raf=requestAnimationFrame(loop)}
function update(dt){const left=keys.has('ArrowLeft')||keys.has('a')||touch.has('left'),right=keys.has('ArrowRight')||keys.has('d')||touch.has('right');player.vx=(right-left)*340;player.x+=player.vx*dt;player.vy+=GRAVITY*dt;const oldY=player.y;player.y+=player.vy*dt;player.ground=false;
for(const p of platforms){if(player.x+player.w>p.x&&player.x<p.x+p.w&&oldY+player.h<=p.y&&player.y+player.h>=p.y&&player.vy>=0){player.y=p.y-player.h;player.vy=0;player.ground=true}}
for(const h of hazards){if(player.x+player.w>h.x&&player.x<h.x+h.w&&player.y+player.h>h.y&&player.y<h.y+h.h){showOverlay('RUN <em>FAILED</em>','You hit an obstacle. Try again.');return}}
for(const c of pickups){if(!c.taken&&Math.hypot(player.x+player.w/2-c.x,player.y+player.h/2-c.y)<28){c.taken=true;coins++;save()}}
if(player.y>H+100){showOverlay('RUN <em>FAILED</em>','You fell off the track. Try again.');return}
if(boss&&player.x>boss.x-50&&player.x<boss.x+boss.w&&player.ground){boss.hp--;player.vy=-500;if(boss.hp<=0)boss=null}
if(player.x>goal+100){saved.cleared.push(zone);saved.unlocked=Math.max(saved.unlocked,Math.min(10,zone+1));if(zone<10)zone++;save();showOverlay('ZONE <em>CLEARED</em>','Zone complete. Next zone unlocked.','CONTINUE');return}
worldX=Math.max(0,player.x-250)}
function render(){ctx.clearRect(0,0,W,H);const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#090d22');g.addColorStop(1,'#090817');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
ctx.save();ctx.translate(-worldX,0);
ctx.strokeStyle='#00e5ff16';ctx.lineWidth=1;for(let x=Math.floor(worldX/60)*60;x<worldX+W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}for(let y=60;y<H;y+=60){ctx.beginPath();ctx.moveTo(worldX,y);ctx.lineTo(worldX+W,y);ctx.stroke()}
for(const p of platforms){ctx.fillStyle='#131b38';ctx.fillRect(p.x,p.y,p.w,p.h);ctx.fillStyle='#00e5ff';ctx.fillRect(p.x,p.y,p.w,3)}
for(const h of hazards){ctx.shadowBlur=18;ctx.shadowColor='#ff2d95';ctx.fillStyle='#ff2d95';ctx.beginPath();ctx.moveTo(h.x,h.y+h.h);ctx.lineTo(h.x+h.w/2,h.y);ctx.lineTo(h.x+h.w,h.y+h.h);ctx.fill();ctx.shadowBlur=0}
for(const c of pickups){if(c.taken)continue;ctx.shadowBlur=16;ctx.shadowColor='#ffe66d';ctx.strokeStyle='#ffe66d';ctx.lineWidth=3;ctx.beginPath();ctx.arc(c.x,c.y,c.r,0,Math.PI*2);ctx.stroke();ctx.shadowBlur=0}
if(boss){ctx.shadowBlur=24;ctx.shadowColor='#ff2d95';ctx.fillStyle='#ff2d95';ctx.fillRect(boss.x,boss.y,boss.w,boss.h);ctx.fillStyle='#fff';ctx.fillRect(boss.x+12,boss.y+25,18,8);ctx.fillRect(boss.x+60,boss.y+25,18,8);ctx.shadowBlur=0}
ctx.shadowBlur=20;ctx.shadowColor='#00e5ff';ctx.fillStyle='#00e5ff';ctx.fillRect(player.x,player.y,player.w,player.h);ctx.fillStyle='#06101b';ctx.fillRect(player.x+6,player.y+9,5,5);ctx.fillRect(player.x+17,player.y+9,5,5);ctx.shadowBlur=0;
ctx.restore();ctx.fillStyle='#91a2c9';ctx.font='600 13px Orbitron,Arial';ctx.fillText('ZONE '+String(zone).padStart(2,'0')+' / 10',24,30);ctx.fillStyle='#00e5ff';ctx.fillRect(24,42,Math.max(0,Math.min(1,player.x/goal))*180,3)}
function keydown(e){const k=e.key.toLowerCase();if([' ','arrowup','arrowleft','arrowright'].includes(k))e.preventDefault();keys.add(k);if([' ','arrowup','w'].includes(k))jump();if(k==='escape'||k==='p'){if(running){paused=!paused;if(paused){running=false;showOverlay('RUN <em>PAUSED</em>','Take a breath, then continue.','RESUME')}}}
function keyup(e){keys.delete(e.key.toLowerCase())}addEventListener('keydown',keydown);addEventListener('keyup',keyup);
document.querySelectorAll('[data-key]').forEach(b=>{const k=b.dataset.key;const down=e=>{e.preventDefault();touch.add(k);if(k==='jump')jump()},up=e=>{e.preventDefault();touch.delete(k)};b.addEventListener('pointerdown',down);['pointerup','pointercancel','pointerleave'].forEach(ev=>b.addEventListener(ev,up))});
startBtn.addEventListener('click',start);coinLabel.textContent='◆ '+String(coins).padStart(3,'0');buildLevel(zone);render();
})();