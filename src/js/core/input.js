export class Input{
 constructor(){this.keys=new Set();this.touch=new Set();this.onJump=null;this.onPause=null;
  addEventListener('keydown',e=>{const k=e.key.toLowerCase();if([' ','arrowup','arrowleft','arrowright'].includes(k))e.preventDefault();this.keys.add(k);if([' ','arrowup','w'].includes(k))this.onJump?.();if(k==='escape'||k==='p')this.onPause?.()});
  addEventListener('keyup',e=>this.keys.delete(e.key.toLowerCase()));
  document.querySelectorAll('[data-key]').forEach(btn=>{const k=btn.dataset.key;btn.addEventListener('pointerdown',e=>{e.preventDefault();this.touch.add(k);if(k==='jump')this.onJump?.()});['pointerup','pointercancel','pointerleave'].forEach(type=>btn.addEventListener(type,e=>{e.preventDefault();this.touch.delete(k)}))});
 }
 axis(){const l=this.keys.has('arrowleft')||this.keys.has('a')||this.touch.has('left'),r=this.keys.has('arrowright')||this.keys.has('d')||this.touch.has('right');return Number(r)-Number(l)}
}
