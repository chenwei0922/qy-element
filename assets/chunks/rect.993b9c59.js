import{h as r,o as s,c as d,g as i}from"./framework.769053c1.js";const p={class:"canvas-example"},g={__name:"rect",setup(f){const{proxy:n}=i();return r(()=>{const o=document.createElement("canvas");o.width=640,o.height=200,n.$el.appendChild(o);const e=o.getContext("2d");let t=e.createRadialGradient(100,100,0,100,100,100);t.addColorStop(0,"red"),t.addColorStop(1,"green"),e.fillStyle=t,e.fillRect(0,0,200,200);const c=220;t=e.createConicGradient(-45*(Math.PI/180),100+c,100),t.addColorStop(0,"red"),t.addColorStop(.5,"skyblue"),t.addColorStop(1,"red"),e.fillStyle=t,e.fillRect(220,0,200,200);const a=new Image;a.src="../../../images/notes/canvas/01.png",a.onload=function(){const l=e.createPattern(a,"repeat");e.fillStyle=l,e.fillRect(440,0,200,200)}}),(o,e)=>(s(),d("div",p))}};export{g as default};
