import{d as a,e as o,o as l,c as u,r,n as i,b as c}from"./framework.b4159e73.js";const d=["default","primary","blue","gray","weak","icon","success","info","warn","danger"],p=["default","small","large"],f={type:{type:String,default:"default",values:d},size:{type:String,default:"default",values:p},text:Boolean,dialog:Boolean,disabled:Boolean},b=a({name:"qy-button"}),m=a({...b,props:f,setup(e){const t=e,n=o(()=>{const s=[t.type,`qy-button--${t.size}`];return t.text&&s.push("text"),t.dialog&&s.push("dialog"),t.disabled&&s.push("disabled"),s});return(s,g)=>(l(),u("span",{class:i(["qy-button",c(n)])},[r(s.$slots,"default")],2))}}),y=e=>(e.install=t=>{const n=e.name;t.component(n,e)},e),B=y(m);export{B as Q};
