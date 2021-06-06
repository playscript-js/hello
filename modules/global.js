function global_object(opt={}){
  if(opt.type=="tag"){this.raw=document.createElement(opt.tag)}
  if(opt.type=="ref"){this.raw=document.querySelectorAll(opt.tag)[0]}
  if(opt.type=="bind"){this.raw=document.getElementById(opt.tag)}
  if(opt.type=="tie"){if(opt.tag.raw)this.raw=opt.tag.raw;else this.raw=opt.tag;opt.tag=opt.tag.raw?opt.tag.raw.tagName.toLowerCase():opt.tag.tagName.toLowerCase()}
  if(opt.type=="clone"){if(opt.tag.raw)this.raw=opt.tag.raw.cloneNode(true);else this.raw=opt.tag.cloneNode(true);opt.tag=opt.tag.raw?opt.tag.raw.tagName.toLowerCase():opt.tag.tagName.toLowerCase()}
  this.tag=opt.tag;if(opt.type!="tie")this.raw.id=Math.ceil(Math.random()*10000000);this.id=this.raw.id||"0";this.delay=0;

  this.css=function(a,b,c){if(typeof a =="string"){if(b||b==0||b=="")this.raw.style[a]=b;else return window.getComputedStyle(this.raw).getPropertyValue(a) }else if(typeof a=="object") {var x=this;Object.keys(a).forEach(function(e){x.raw.style[e]=a[e]})}else{}return this}
  this.attr=function(a,b,c){if(typeof a =="string"){if(b||b==0||b=="")this.raw.setAttribute(a,b);else return this.raw.getAttribute(a) }else if(typeof a=="object"){var x=this;Object.keys(a).forEach(function(e){x.raw.setAttribute(e,a[e])})} else {}return this}
  this.var=function(a,b,c){if(typeof a =="string"){if(b||b==0||b=="")this.raw.style.setProperty("--"+a,b);else return window.getComputedStyle(this.raw).getPropertyValue("--"+a) }else if(typeof a=="object") {var x=this;Object.keys(a).forEach(function(e){x.raw.style.setProperty("--"+e,a[e])})}else{}return this}
  this.html=function(a){if(a||a==0||a=="")this.raw.innerHTML=a;else return this.raw.innerHTML;return this}
  this.text=function(a){if(a||a==0||a=="")this.raw.innerText=a;else return this.raw.innerText;return this}
  this.children=function(a){var n=[];if(a)[].slice.call(this.raw.querySelectorAll("*")).forEach(function(e){n.push(new tie(e))}); else [].slice.call(this.raw.children).forEach(function(e){n.push(new tie(e))});return n}
  this.child=function(a,b){return this.children(b)[a]}
  this.shared=function(a,b,c){if(a=="css")this.children(c).forEach(function(e){e.css(b)});else if(a=="attr")this.children(c).forEach(function(e){e.attr(b)});return this}
  this.add=function(/*infinite*/){var x=this;var args=[].slice.call(arguments);args.forEach(function(e){x.raw.append(e.raw||e);if(x.tag=="layout"||x.tag=="body"||x.tag=="modal"||x.tag=="list")if(e.raw)e.css("flex","0 0 auto")});return this}
  this.on=function(a,b){this.raw.addEventListener(a,function(e,h,d){b(e,h,d)});return this}
  this.bind=function(a) { this.attr("bind",JSON.stringify(a)); return this }
  this.index=function(a) { var m = this.raw; var i = -1; while ((m = m.previousSibling) != null) i++; return i }
  this.parent=function(a) { return new tie(this.raw.parentElement) }
  this.empty=function() { this.raw.textContent = ''; return this }
  this.ins=function(a,b) { this.raw.insertBefore(a.raw ||a, this.raw.children[b]); return this }
  this.remove=function( /*infinite*/ ) { var args = arguments; if (args.length == 0) this.raw.remove();
    else
      for (let i = 0; i < args.length; i++) { if (typeof args[i] != "number") this.raw.removeChild(args[i].raw || args[i]);
        else this.raw.children[args[i]].remove() }; return this }
  this.animate=function(a,b=350,c=function(){},d={}){
   if("animate" in this.raw && "keys" in Object){
     var precss={};var post=d;post.duration=b;post.fill="forwards";var ls=Object.keys(a);for(var i=0;i<ls.length;i++){precss[ls[i]]=this.css(ls[i])};console.log(JSON.stringify(precss))
     this.raw.animate([precss,a], post);
   }else{this.css(a);if(c)c()};return this}
this.anmend=function(a,b){this.css(a);b()}

  if(opt.css)this.css(opt.css);if(opt.attr)this.attr(opt.attr)
 return this
}

function tag(a,b,c){return new global_object({type:"tag",tag:a,css:{ "-webkit-text-size-adjust": "100%", "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "font-family": '"Poppins",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', "font-size": "17px", "font-weight": '400', "color": "var(--text)", "display": "inline",width:b,height:c,color:"var(--text)"}})}
function ref(a){return new global_object({type:"ref",tag:a})}
function bind(a){return new global_object({type:"bind",tag:a})}
function tie(a){return new global_object({type:"tie",tag:a})}
function clone(a){return new global_object({type:"clone",tag:a})}


