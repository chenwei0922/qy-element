import{h as l,o as d,c as i,g as p}from"./framework.769053c1.js";const u={class:"canvas-example"},_={__name:"curve",setup(v){const{proxy:s}=p();return l(()=>{const r=document.createElement("canvas");r.width=600,r.height=200,s.$el.appendChild(r);const e=r.getContext("2d");e.moveTo(0,0),e.quadraticCurveTo(0,150,200,0),e.strokeStyle="red",e.stroke(),e.moveTo(220,0),e.bezierCurveTo(220,250,350,-200,400,200),e.strokeStyle="red",e.stroke();const o=500,t=20,a=o,c=t+80;e.beginPath(),e.moveTo(o,t),e.bezierCurveTo(o-40,t-30,o-80,t+30,a,c),e.moveTo(o,t),e.bezierCurveTo(o+40,t-30,o+80,t+30,a,c);const n=e.createRadialGradient(o-20,t+20,0,o-20,t+20,60);n.addColorStop(0,"pink"),n.addColorStop(1,"red"),e.fillStyle=n,e.fill(),e.closePath()}),(r,e)=>(d(),i("div",u))}};export{_ as default};
