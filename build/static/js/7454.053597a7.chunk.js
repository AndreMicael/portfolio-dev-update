"use strict";(self.webpackChunkportfolio_dev_2024=self.webpackChunkportfolio_dev_2024||[]).push([[7454],{7454:(t,e,o)=>{o.d(e,{Bouncer:()=>v});var n=o(4409);const i=2,s=.5,c=Math.PI*s,a=2,r=10;function l(t,e,o,s,a){const r=t.particles.quadTree.query(s,a);for(const l of r)s instanceof n.jl?(0,n.pE)((0,n.Tg)(l),{position:e,radius:o,mass:o**i*c,velocity:n.Mi.origin,factor:n.Mi.origin}):s instanceof n.M_&&(0,n.jo)(l,(0,n.AE)(e,o))}function f(t,e,o,i){(0,n.U6)(o,e,((e,o)=>function(t,e,o,i){const c=document.querySelectorAll(e);c.length&&c.forEach((e=>{const c=e,l=t.retina.pixelRatio,f={x:(c.offsetLeft+c.offsetWidth*s)*l,y:(c.offsetTop+c.offsetHeight*s)*l},u=c.offsetWidth*s*l,d=r*l,v="circle"===o.type?new n.jl(f.x,f.y,u+d):new n.M_(c.offsetLeft*l-d,c.offsetTop*l-d,c.offsetWidth*l+d*a,c.offsetHeight*l+d*a);i(f,u,v)}))}(t,e,o,((e,o,n)=>l(t,e,o,n,i)))))}class u{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}const d="bounce";class v extends n.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,e=t.actualOptions.interactivity.modes.bounce;e&&(t.retina.bounceModeDistance=e.distance*t.retina.pixelRatio)}interact(){const t=this.container,e=t.actualOptions.interactivity.events,o=t.interactivity.status===n.Rb,i=e.onHover.enable,s=e.onHover.mode,c=e.onDiv;o&&i&&(0,n.hn)(d,s)?function(t,e){const o=t.retina.pixelRatio,i=r*o,s=t.interactivity.mouse.position,c=t.retina.bounceModeDistance;!c||c<0||!s||l(t,s,c,new n.jl(s.x,s.y,c+i),e)}(this.container,(t=>this.isEnabled(t))):f(this.container,c,d,(t=>this.isEnabled(t)))}isEnabled(t){var e;const o=this.container,i=o.actualOptions,s=o.interactivity.mouse,c=(null!==(e=null===t||void 0===t?void 0:t.interactivity)&&void 0!==e?e:i.interactivity).events,a=c.onDiv;return!!s.position&&c.onHover.enable&&(0,n.hn)(d,c.onHover.mode)||(0,n.iK)(d,a)}loadModeOptions(t){t.bounce||(t.bounce=new u);for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];for(const i of o)t.bounce.load(null===i||void 0===i?void 0:i.bounce)}reset(){}}}}]);
//# sourceMappingURL=7454.053597a7.chunk.js.map