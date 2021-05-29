var rawfbdbrefvariable={}

    
    
class setup {
  constructor(opt = {}, dev = false) {
    opt.firebase=opt.firebase||false
    this.disk=window.localStorage;
    this.request=axios
    /* setup obj
    {title:"Play App",
     subtitle:null,
     icon:null,
     import:"global",
     ready:start}
     events","button","edit","flex","image","modal","dialog","stringlist,customlist","text"
    */
    //presets
    this.opt = opt

    //handle app types
    this.opt.type = this.opt.type || "default"
    this.opt.theme = this.opt.theme || "light"
    if (this.opt.type == "core") this.opt.import = this.opt.import ? "global,events," + this.opt.import : "global,events"
    if (this.opt.type == "default") this.opt.import = this.opt.import ? "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,alert,confirm,prompt,toast,select," + this.opt.import : "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,alert,confirm,prompt,toast,select"
    if (this.opt.type == "matte") this.opt.import = this.opt.import ? "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,bar,drawer,hero,menu,page,alert,confirm,prompt,snack,slit,toast,select," + this.opt.import : "global,events,flex,text,edit,image,button,modal,dialog,stringlist,customlist,bar,drawer,hero,menu,page,alert,confirm,prompt,snack,slit,toast,select"

    //app title
    this.titleInt = document.createElement("title");
    this.titleInt.innerText = this.opt.title || this.opt.nosplash||"PlayScript"
    document.head.appendChild(this.titleInt)
    this.splash;

        /* auto root finder */
    




    //import dependency scripts
    this.opt.import = this.opt.import.split(",")
    if(this.opt.firebase)this.opt.import.push("firebase")
    var list2=[]
    for(var i =0;i<this.opt.import.length;i++){
      list2.push(this.root+"modules/"+this.opt.import[i]+".js")
    }
        //importingg firebase dependench scripts
        if (this.opt.firebase) {
          rawfbdbrefvariable = function(e) { if (e) return firebase.database().ref().child(e);
            else return firebase.database().ref() }
          this.rawport(["firebase/app.js", "firebase/an.js", "firebase/db.js"])
        }
    this.stackscript(list2,this.start)

    //on ready
   // window.addEventListener("load", this.start.bind(this))
    
    
    //search for url paramsvar search = location.search.substring(1);
    var search = location.search.substring(1);
    if(search)this.params=JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    
  }
  params(e){return this.params=JSON.parse('{"' + decodeURI(e).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
  } 


  db(e){
    if(e) return firebase.database().ref().child(e); else return firebase.database().ref()
  } 

  start() {
    if(this.opt.firebase){firebase.initializeApp(this.opt.firebase);}
    var th = {}
    document.querySelector("doc_log").remove()
    if (window.localStorage.play_back) {
      th.back = window.localStorage.play_back
      th.text = window.localStorage.play_text
      th.shad = window.localStorage.play_shadow

    } else if (this.opt.theme) {
      th.back = this.opt.theme == "dark" ? "#161616" : "#fcfcfc"
      th.text = this.opt.theme == "dark" ? "#ececec" : "#545454"
      th.shad = this.opt.theme == "dark" ? "#00000040" : "#00000010"
    } else {
      th = { back: "#fcfcfc", text: "#545454", shad: "#00000010" }
    }
    html = new ref(document.body.parentElement)
      .cssvar({ "accent": window.localStorage.play_accent || this.opt.hue ? this.opt.hue : "#e91e63", text: th.text, back: th.back, shadow: th.shad })
      .css({ background: "var(--back)", opacity: 0, width: "100%", height: "100%" })
      .animate({ opacity: 1 }, 350)
    head = new ref(document.head).css({});
    body = new ref(document.body).css({ border: 0, padding: 0, margin: 0, width: "100%", height: "100%", "display": "flex", "flex-direction": "column", "align-items": "flex-start" })

    //splash screen

    if (this.opt.title && this.opt.type != "core") this.splash = new flex("column", "100%", "100%").css({ position: "fixed", background: "var(--back)", padding: "0px", top: 0, bottom: 0, left: 0, right: 0, "z-index": 7 }).align("center").add(new text(this.opt.title).css({ padding: 0, "font-size": "24px", "margin-top": "auto", color: "var(--text)" }), new text(typeof this.opt.subtitle=="string"?this.opt.subtitle:"Powered by PlayScript").css({ padding: 0, "font-size": "10px", color: "var(--accent)", "margin-bottom": "50px" }))
    if (this.opt.title && this.opt.type != "core") html.add(this.splash)
    setTimeout(this.unsplash.bind(this), this.opt.title ? 3000 : 1)

  }

  unsplash() {
    if (this.opt.ready) this.opt.ready();
    else start()
    if (this.opt.title && this.opt.type != "core") this.splash.animate({ opacity: 0, transform: "scale(1.2)" }, 1000, null, this.unsplash_ended.bind(this))
    this.style(this.root + "mdi/css/mdi.css")

  }
  unsplash_ended(e) {
    this.splash.remove()
  }



  //set theme
  theme(type) {
    var e = window.localStorage.play_back || "#fcfcfc"
    if (type == "toggle") {
      if (e == "#fcfcfc") type = "dark"
      if (e == "#161616") type = "light"
    }
    if (type == "light") {
      window.localStorage.play_back = "#fcfcfc";
      window.localStorage.play_text = "#545454";
      window.localStorage.play_shadow = "#00000010";
      html.cssvar({ text: window.localStorage.play_text, back: window.localStorage.play_back, shadow: window.localStorage.play_shadow })

    } else {
      window.localStorage.play_back = "#161616";
      window.localStorage.play_text = "#ececec";
      window.localStorage.play_shadow = "#00000040";
      html.cssvar({ text: window.localStorage.play_text, back: window.localStorage.play_back, shadow: window.localStorage.play_shadow })

    }
  }


  //import external scripts
  script(path, call) {
    let script = document.createElement("script");
    script.setAttribute("src", path);
    document.head.appendChild(script);
    script.addEventListener("load", function(e) { script.remove(); if (call) call();
      else console.log(path, " loaded") });
  }
  //sync external scripts
  syncscript(path, call) {
    let script = document.createElement("script");
    script.setAttribute("src", path);
    script.setAttribute("async", "false")
    document.head.appendChild(script);
    script.addEventListener("load", function(e) { if (call) call();
      else console.log(path, " loaded") });
  }
  //import external styles
  style(path, call) {
    let script = document.createElement("style");
    script.innerText = "@import url(" + path + ")"
    document.head.appendChild(script);
    script.addEventListener("load", function(e) { if (call) call();
      else console.log(path, " loaded") });
  }
  stackscript(e,h) {
    var list2=[]
    this.m=h
    for(var i=0;i<e.length;i++){
      list2.push(axios.get(e[i]))
    }
    axios.all(list2).then(this.ss2.bind(this))
  }
  ss2(e){
    var x = ""
    for (var i = 0; i < e.length; i++) {
      x += "\n" + e[i].data
    }
    try { eval(x) } catch (e) { alert(e) }
    if (typeof this.m == "function") alert(new text("hi"))
  }
  rawport(e) {
    if (e.length != 0) {
      this.script(e[0] , this.rawport.bind(this, e));
      console.log(e[0])
      e.shift()

    }
  }
  read(e, h) { var f = new XMLHttpRequest(); var m = null;
    f.open("GET", e, h ? true : false);
    f.onreadystatechange = function() { if (f.readyState === 4) { if (f.status === 200 || f.status == 0) { var res = f.responseText; if (h) h(res);
          else m = res } } };
    f.send(null); if (!h) return m }
download(url,filename) {
             
   var postData = new FormData();
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'blob';
		xhr.onload = function (e) {
			var blob = xhr.response;
			var tempEl = document.createElement("a");
			document.body.appendChild(tempEl);
			tempEl.style = "display: none";
			url = window.URL.createObjectURL(blob);
			tempEl.href = url;
			tempEl.download = filename;
			tempEl.click();
			window.URL.revokeObjectURL(url);
			tempEl.remove()
		}
		xhr.send(postData);
 }
  back(e) { history.back() }
  code(e, h) {
    var f = new XMLHttpRequest();
    var m = null;
    f.open("GET", e, h ? true : false);
    f.onreadystatechange = function() { if (f.readyState === 4) var res = f.status; if (h) h(res); else m = res };
    f.send(null); if (!h) return m
  }
  h(){return window.innerHeight}
  w(){return window.innerWidth}
  title(e){this.titleInt.innerText=e}
  url(e){var e=e;setTimeout(function(){location.href=e;},50)}
  refresh(e){var e=e;setTimeout(function(){location.href=location.href;},50)}
  get(e, h){var f = new XMLHttpRequest();var m = null;f.open("GET", e, h ? true : false);f.onreadystatechange = function() { if (f.readyState === 4) var res = f; if (h) h(res); else m = res };f.send(null); if (!h) return m}
  host(e){if(e){if(window.location.hostname==e)return true; else return false}else return window.location.hostname}
  mail(e){window.open(`mailto:${e}`);return this}
  json(e){if(typeof e=="string")return JSON.parse(e);else return JSON.stringify(e)}
  decode(e) { return decodeURI(e) }
  encode(e) { return encodeURI(e) }
  
}

    /* load external/internal script if avail */

