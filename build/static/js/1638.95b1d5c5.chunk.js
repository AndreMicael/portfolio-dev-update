"use strict";(self.webpackChunkportfolio_dev_2024=self.webpackChunkportfolio_dev_2024||[]).push([[1638],{1638:(e,t,o)=>{o.d(t,{EmojiDrawer:()=>l});var a=o(4409);var i=o(6682);const n='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class l{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(null===t||void 0===t||t.close(),this._emojiShapeDict.delete(e))}draw(e){!function(e){const{context:t,particle:o,radius:a,opacity:i}=e,n=o.emojiData,l=2*a,c=t.globalAlpha;n&&(t.globalAlpha=i,t.drawImage(n,-a,-a,l,l),t.globalAlpha=c)}(e)}async init(e){const t=e.actualOptions;if(!i.u.find((e=>(0,a.hn)(e,t.particles.shape.type))))return;const o=[(0,a.Al)(n)],l=i.u.map((e=>t.particles.shape.options[e])).find((e=>!!e));l&&(0,a.wJ)(l,(e=>{e.font&&o.push((0,a.Al)(e.font))})),await Promise.all(o)}particleDestroy(e){delete e.emojiData}particleInit(e,t){var o;const i=t.shapeData;if(null===i||void 0===i||!i.value)return;const l=(0,a.TA)(i.value,t.randomIndexData),c=null!==(o=i.font)&&void 0!==o?o:n;if(!l)return;const s="".concat(l,"_").concat(c),r=this._emojiShapeDict.get(s);if(r)return void(t.emojiData=r);const p=2*(0,a.W9)(t.size.value);let f;const d=(0,a.W9)(t.size.value);if("undefined"!==typeof OffscreenCanvas){const e=new OffscreenCanvas(p,p),t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*d,"px ").concat(c),t.textBaseline="middle",t.textAlign="center",t.fillText(l,d,d),f=e.transferToImageBitmap()}else{const e=document.createElement("canvas");e.width=p,e.height=p;const t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*d,"px ").concat(c),t.textBaseline="middle",t.textAlign="center",t.fillText(l,d,d),f=e}this._emojiShapeDict.set(s,f),t.emojiData=f}}}}]);
//# sourceMappingURL=1638.95b1d5c5.chunk.js.map