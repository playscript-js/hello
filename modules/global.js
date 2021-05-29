function global_object(opt={}){
  if(opt.type=="tag"){this.raw=document.createElement(opt.tag)}
  if(opt.type=="ref"){this.raw=document.querySelectorAll(opt.tag)[0]}
  if(opt.type=="bind"){this.raw=document.getElementById(opt.tag)}
  if(opt.type=="tie"){if(opt.tag.raw)this.raw=opt.tag.raw;else this.raw=opt.tag;opt.tag=opt.tag.raw?opt.tag.raw.tagName.toLowerCase():opt.tag.tagName.toLowerCase()}
  if(opt.type=="clone"){if(opt.tag.raw)this.raw=opt.tag.raw.cloneNode(true);else this.raw=opt.tag.cloneNode(true);opt.tag=opt.tag.raw?opt.tag.raw.tagName.toLowerCase():opt.tag.tagName.toLowerCase()}
  this.tag=opt.tag;if(opt.type!="tie")this.raw.id=Math.ceil(Math.random()*10000000);this.id=this.raw.id||"0"

  this.css=function(a,b,c){if(typeof a =="string"){if(b||b==0||b=="")this.raw.style[a]=b;else return window.getComputedStyle(this.raw).getPropertyValue(a) }else if(typeof a=="object") {var x=this;Object.keys(a).forEach(function(e){x.raw.style[e]=a[e]})}else{}return this}
  this.attr=function(a,b,c){if(typeof a =="string"){if(b||b==0||b=="")this.raw.setAttribute(a,b);else return this.raw.getAttribute(a) }else if(typeof a=="object"){var x=this;Object.keys(a).forEach(function(e){x.raw.setAttribute(e,a[e])})} else {}return this}
  this.var=function(a,b,c){if(typeof a =="string"){if(b||b==0||b=="")this.raw.style.setProperty("--"+a,b);else return window.getComputedStyle(this.raw).getPropertyValue("--"+a) }else if(typeof a=="object") {var x=this;Object.keys(a).forEach(function(e){x.raw.style.setProperty("--"+e,a[e])})}else{}return this}
  this.html=function(a){if(a||a==0||a=="")this.raw.innerHTML=a;else return this.raw.innerHTML;return this}
  this.text=function(a){if(a||a==0||a=="")this.raw.innerText=a;else return this.raw.innerText;return this}
  this.children=function(a){var n=[];if(a)[].slice.call(this.raw.querySelectorAll("*")).forEach(function(e){n.push(new tie(e))}); else [].slice.call(this.raw.children).forEach(function(e){n.push(new tie(e))});return n}
  this.child=function(a,b){return this.children(b)[a]}
  this.shared=function(a,b,c){if(a=="css")this.children(c).forEach(function(e){e.css(b)});else if(a=="attr")this.children(c).forEach(function(e){e.attr(b)});return this}
  this.add=function(/*infinite*/){var x=this;var args=[].slice.call(arguments);args.forEach(function(e){x.raw.append(e.raw||e);if(x.tag=="layout"||x.tag=="body"||x.tag=="modal")if(e.raw)e.css("flex","0 0 auto")});return this}
  this.on=function(a,b){this.raw.addEventListener(a,function(e,h,d){b(e,h,d)});return this}
  if(opt.css)this.css(opt.css);if(opt.attr)this.attr(opt.attr)
 return this
}

function tag(a,b,c){return new global_object({type:"tag",tag:a,css:{width:b,height:c,color:"var(--text)"}})}
function ref(a){return new global_object({type:"ref",tag:a})}
function bind(a){return new global_object({type:"bind",tag:a})}
function tie(a){return new global_object({type:"tie",tag:a})}
function clone(a){return new global_object({type:"clone",tag:a})}





