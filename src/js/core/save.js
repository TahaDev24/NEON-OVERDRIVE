import {SAVE_KEY,ZONE_COUNT} from './config.js';
export function loadSave(){try{const raw=JSON.parse(localStorage.getItem(SAVE_KEY)||'{}');return{coins:Math.max(0,raw.coins|0),unlocked:Math.max(1,Math.min(ZONE_COUNT,raw.unlocked|0||1)),cleared:Array.isArray(raw.cleared)?raw.cleared.filter(n=>Number.isInteger(n)&&n>=1&&n<=ZONE_COUNT):[]}}catch{return{coins:0,unlocked:1,cleared:[]}}}
export function persistSave(save){localStorage.setItem(SAVE_KEY,JSON.stringify(save))}
