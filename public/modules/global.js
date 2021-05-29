/*
PLAYSCRIPT 1.0
by : Dealdrey Garoeb
27.11.2020
https://playscript.io

*/
var html, head, body;
/* global object = default element setup */
class global {
  constructor(id, opt) { if (opt.type == "new") this.raw = document.createElement(id);
    else if (opt.type == "bind") this.raw = document.querySelector(id);
    else if (opt.type == "clone") this.raw = id.raw.cloneNode(true) || id.cloneNode(true);
    else this.raw = typeof id=="object"?id.raw||id:document.querySelector(id.includes("#")?id:"#"+id);
    this.animated = false;
    this.hold = [];
    this.keep = {}; if (opt.type != "ref") { this.raw.id = "ID_" + Math.floor(Math.random() * 99999999999);}
      this.id = this.raw.id ; 
      
      return this }
  add( /**/ ) { var args = arguments; for (let i = 0; i < args.length; i++) { this.raw.append(args[i].raw || args[i]) }; return this }
  ins(child, pos) { this.raw.insertBefore(child.raw || child, this.raw.children[pos]); return this }
  remove( /**/ ) { var args = arguments; if (args.length == 0) this.raw.remove();
    else
      for (let i = 0; i < args.length; i++) { if (typeof args[i] != "number") this.raw.removeChild(args[i].raw || args[i]);
        else this.raw.children[args[i]].remove() }; return this }
  child(pos, deep) { return this.children(deep)[pos] }
  empty() { this.raw.textContent = ''; return this }
  children(deep) { if (deep) var list = this.raw.querySelectorAll("*");
    else var list = this.raw.children; var hold = []; for (var i = 0; i < list.length; i++) { hold[i] = new ref(list[i]) } return hold }
  on(type, call) { this.raw.addEventListener(type, function(e) { call(e) }); return this }
  text(dat) { if (typeof dat!="undefined"||dat!=null) { this.raw.innerText = dat; return this } else return this.raw.innerText }
  html(dat) { if (typeof dat!="undefined") { this.raw.innerHTML = dat; return this }else return this.raw.innerHTML }
  attr(type, dat) { if (dat != undefined && typeof type == "string") { this.raw.setAttribute(type, dat); return this } else if (typeof type == "object") { let o = Object.keys(type); for (let i = 0; i < o.length; i++) { this.raw.setAttribute([o[i]], type[o[i]]) } return this } else if (typeof type == "string" && dat == undefined) { return this.raw.getAttribute(type) } else return this }
  css(type, dat) { if (dat != undefined && typeof type == "string") { this.cssTest(type);this.raw.style[type] = dat; return this } else if (typeof type == "object") { let o = Object.keys(type); for (let i = 0; i < o.length; i++) {this.cssTest(o[i]); this.raw.style[o[i]] = type[o[i]] } return this } else if (typeof type == "string" && dat == undefined) { this.style = window.getComputedStyle(this.raw, null); return this.style[type] } else return this }
  cssTest(e){
  }
  ncss(e,h,d){ if(e in this.raw.style!=true)this.css(h);return this}
  class(type, dat) { if (!dat && !type) return this.raw.classList;
    else if (!dat && type || type == "add") { this.raw.classList.add(dat || type); return this } else if (type == "remove") { this.raw.classList.remove(dat); return this } else if (type == "toggle") { this.raw.classList.toggle(dat); return this } else return this.raw.classList.contains(dat) }
  cssvar(type, dat) { if (dat == undefined && type == "string") return getComputedStyle(this.raw).getPropertyValue(type);
    else if (dat == undefined && typeof type == "object") { let o = Object.keys(type); for (let i = 0; i < o.length; i++) { this.raw.style.setProperty("--" + o[i], type[o[i]]) } return this } else { this.raw.style.setProperty("--" + type, dat); return this } }
  bind(e) { this.attr("bind",JSON.stringify(e)); return this }
  return(e){this.attr("return",e);return this}
  index(e) { var m = this.raw; var i = -1; while ((m = m.previousSibling) != null) i++; return i }
  parent(e) { return new ref(this.raw.parentElement) }
  icon(e) { var i = ""; if (e) { this.add(i = new tag("icon").html('<i class="zmdi zmdi-' + e + '" ></i>').css({ "margin": "auto", "color": "inherit" }));
      this.currentIcon = e; return i } else return this.currentIcon }
  icons(e) { return new bind("#" + this.raw.querySelectorAll("icon")[e].getAttribute("id")) }
  die(after = 0, wanm = { opacity: 0 }, ext = 300) {
    setTimeout(this.die_subset.bind(this, wanm, ext), after)
    return this
  }
  die_subset(p1, p2) {
    this.animate(p1, p2, null, this.remove.bind(this))
    return this
  }
  /* experimental */







  animate(key, time, opt, call) {
    if (!this.animated) {
      if ('animate' in this.raw){
      opt = opt || {};
      this.keep = key;
      this.animated = true;
      this.style = window.getComputedStyle(this.raw, null)
      this.hold = Object.keys(key);
      this.start = {};
      this.end = {};
      this.keys = []
      for (var i = 0; i < this.hold.length; i++) {
        this.start[this.hold[i]] = this.style[this.hold[i]]
        this.end[this.hold[i]] = key[this.hold[i]]
      }
      this.keys.push(this.start)
      this.keys.push(this.end)
      this.raw.animate(this.keys, { duration: time || 350, easing: opt.ease || "ease-in" })
      var raw = this.raw
      setTimeout(this.anmEnd.bind(this), time)
      if (call) this.anmcall = call;
      else this.anmcall = function() {}
      } else {
        this.css(key)
        if(call)call()
      }
    }

    return this
  }
  anmEnd() { for (var i = 0; i < this.hold.length; i++) { this.raw.style[this.hold[i]] = this.keep[this.hold[i]] };
    this.animated = false;
    this.anmcall() }

}
/* creates an element */
class tag extends global { constructor(id, w, h, opt) { super(id, { type: "new" });
    this.css({ "-webkit-text-size-adjust": "100%", "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', "font-size": "17px", "font-weight": '400', "color": "var(--text)", "display": "inline", width: w, height: h }); return this } }
/* binds an existing element as a playElement */
class bind extends global { constructor(id, w, h, opt) { super(id, { type: "bind" }); return this } }
/* clones an existing element as a playElement */
class clone extends global { constructor(id, w, h, opt) { super(id, { type: "clone" }); return this } }
/* refers to an html element as a playElement */
class ref extends global { constructor(id, w, h, opt) { super(id, { type: "ref" }); return this } }
/* basic app setup */



