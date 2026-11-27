import {WIDTH,HEIGHT,ZONE_COUNT} from './core/config.js';
import {loadSave,persistSave} from './core/save.js';
import {Input} from './core/input.js';
import {createLevel} from './world/level.js';
import {renderWorld} from './render/renderer.js';
const canvas=document.querySelector('#game'),ctx=canvas.getContext('2d'),overlay=document.querySelector('#overlay'),startBtn=document.querySelector('#startButton'),title=document.querySelector('#overlayTitle'),text=document.querySelector('#overlayText'),zoneLabel=document.querySelector('#zoneLabel'),coinLabel=document.querySelector('#coinLabel');
let save=loadSave(),zone=save.unlocked,coins=save.coins,level,player,camera=0,running=false,paused=false,raf=0,last=0;const input=new Input();
function resize(){const dpr=Math.min(devicePixelRatio||1,2);canvas.width=WIDTH*dpr;canvas.height=HEIGHT*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}resize();addEventListener('resize',resize);
function persist(){save.coins=coins;save.unlocked=Math.max(save.unlocked,zone);persistSave(save);coinLabel.textContent='◆ '+String(coins).padStart(3,'0')}
function newRun(){level=createLevel(zone);player={x:80,y:330,vx:0,vy:0,w:28,h:36,ground:false};camera=0;zoneLabel.textContent='ZONE '+String(zone).padStart(2,'0')}
function show(titleText,desc,buttonText){running=false;cancelAnimationFrame(raf);title.innerHTML=titleText;text.textContent=desc;startBtn.innerHTML=buttonText+' <span>↗</span>';overlay.classList.remove('hidden')}
function start(){newRun();overlay.classList.add('hidden');running=true;last=performance.now();raf=requestAnimationFrame(frame)}
function jump(){if(running&&player.ground){player.vy=-720;player.ground=false}}
input.onJump=jump;input.onPause=()=>{if(running)show('RUN <em>PAUSED</em>','Paused. Continue when ready.','RESUME')};
function frame(now){if(!running)return;const dt=Math.min((now-last)/1000,.033);last=now;update(dt);draw();if(running)raf=requestAnimationFrame(frame)}
function update(dt){player.vx=input.axis()*340;player.x+=player.vx*dt;const oldY=player.y;player.vy+=1900*dt;player.y+=player.vy*dt;player.ground=false;
for(const p of level.platforms)if(player.x+player.w>p.x&&player.x<p.x+p.w&&oldY+player.h<=p.y&&player.y+player.h>=p.y&&player.vy>=0){player.y=p.y-player.h;player.vy=0;player.ground=true}
for(const h of level.hazards)if(player.x+player.w>h.x&&player.x<h.x+h.w&&player.y+player.h>h.y&&player.y<h.y+h.h){show('RUN <em>FAILED</em>','You hit an obstacle. Try again.','RETRY');return}
for(const c of level.pickups)if(!c.taken&&Math.hypot(player.x+player.w/2-c.x,player.y+player.h/2-c.y)<28){c.taken=true;coins++;persist()}
if(player.y>HEIGHT+100){show('RUN <em>FAILED</em>','You fell off the track. Try again.','RETRY');return}
if(level.boss&&player.x>level.boss.x-50&&player.x<level.boss.x+level.boss.w&&player.ground){level.boss.hp--;player.vy=-500;if(level.boss.hp<=0)level.boss=null}
if(player.x>level.goal+100){save.cleared.push(zone);save.unlocked=Math.max(save.unlocked,Math.min(ZONE_COUNT,zone+1));zone=Math.min(ZONE_COUNT,zone+1);persist();show('ZONE <em>CLEARED</em>','Zone complete. Next zone unlocked.','CONTINUE');return}
camera=Math.max(0,player.x-250)}
function draw(){renderWorld(ctx,{player,level,zone,coins,camera})}
startBtn.addEventListener('click',start);coinLabel.textContent='◆ '+String(coins).padStart(3,'0');newRun();draw();
