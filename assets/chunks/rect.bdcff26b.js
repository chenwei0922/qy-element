import{h as c,o as r,c as l,g as d}from"./framework.769053c1.js";const s={class:"canvas-example"},_={__name:"rect",setup(i){const{proxy:a}=d();return c(()=>{const o=document.createElement("canvas");o.width=600,o.height=200,a.$el.appendChild(o);const t=o.getContext("2d");let e=t.createRadialGradient(100,100,0,100,100,100);e.addColorStop(0,"red"),e.addColorStop(1,"green"),t.fillStyle=e,t.fillRect(0,0,200,200);const n=220;e=t.createConicGradient(-45*(Math.PI/180),100+n,100),e.addColorStop(0,"red"),e.addColorStop(.5,"skyblue"),e.addColorStop(1,"red"),t.fillStyle=e,t.fillRect(220,0,200,200)}),(o,t)=>(r(),l("div",s))}};export{_ as default};
