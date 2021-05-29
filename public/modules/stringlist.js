class stringlist extends tag{
  constructor(lst,w,h,opt={}){
    super("stringlist",w||"100%",h,null,"stringlist")
    opt=opt||{}
    opt.config=opt.config||{title:"title",body:"body",img:"img"}
    this.ctitle=opt.config.title
    this.cbody=opt.config.body
    this.cimg=opt.config.img
    /*defaults*/
    this.opt=opt||""
    this.call=function(e,h,r,d){console.log(e,h,r,d)}
    this.on("click", this.hashtrue.bind(this)).css({"overflow-x":"hidden","overflow-y":"scroll"})
    this.listdata=[];this.list(lst)

    return this
  }
  push(obj,pos,rep){
    var img,title,body,icon,misc=""
    if(typeof obj!="object"){var e=obj;obj={};obj[this.ctitle]=e}
      if(typeof pos=="undefined")this.listdata.push(obj);else this.listdata.splice(pos,rep?1:0,obj)
    title=obj[this.ctitle]?new text(obj[this.ctitle],null,null,"oneline").css({"color":"var(--text)","font-size":obj[this.cbody]?"17px":"17px","padding":"3px"}):""
    body=obj[this.cbody]?new text(obj[this.cbody],null,null,"oneline").css({padding:"3px",opacity:.5}):""
    img=obj[this.cimg]?new image(obj[this.cimg],obj[this.cbody]?"48px":"25px",obj[this.cbody]?"48px":"25px").css({"margin":"4px","border-radius":"100px"}):""
    var temp=new flex("row","100%",null,null,"listitem").css({"padding":"4px"}).add(
      img,
      new flex("column","100%").add(title,body)
      
      ).align("center").attr({id:"false"})
      
    if(rep)this.remove(pos)
    this.ins(temp,pos)
    temp.attr("onclick","this.id=true")
    this.changed(rep?"replace":"push",typeof pos== "number"?pos:this.list().length,obj)
    return this}
    
  pop(pos){this.listdata.splice(pos,1);this.list(this.listdata); this.changed("pop",pos,this.list()[pos]);return this}
  changed(e,h,d){console.log(e,h,d)}
  
  select(call){this.call=call;return this}
  list(e){if(e){
    this.listdata=[];this.empty()
        /*convert lst string into obj*/
    if(typeof e=="string"){var mlst=e.split(",");e=[];for(var i=0;i<mlst.length;i++){var n={};n[this.ctitle]=mlst[i];e.push(n)}}
    for(var i=0;i<e.length;i++){this.push(e[i])};return this}
  else{return this.listdata};this.changed("list",0,e)}
  change(e){this.changed=e;return this}
  hashtrue(){  var m=this.raw.querySelector("#true");  m=new ref(m).attr("id","false");  this.call(m.index()+1,this.listdata[m.index()+1],m,this.list()); m={} }
  highlight(e,h){if(typeof this.highlighted=="number")this.child(this.highlighted).child(this.listdata[this.highlighted][this.cimg]?1:0).child(0).css("color","var(--text)");this.child(e).child(this.listdata[e][this.cimg]?1:0).child(0).css("color",h||"var(--accent)");this.highlighted=e}//.child(1).child(0).css({color:"var(--accent)"})}
}