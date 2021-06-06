function bar(t,type="none",opt=""){
  var obj=new layout("column","100%",null,"shadow").css({position:"sticky",top:"0px",zIndex:1,overflow:"visible"})
  obj.add(obj.navbar=new stringlist("","100%","0px").css({color:"inherit",overflowX:"hidden"}),obj.bar=new layout("row","100%",null,"","bar")
  .align("center").add(
    opt.includes("drawer")?new icon("list","24px","black").on("click",function(){obj.navbar.animate({"height":obj.navbar.css("height")=="0px"?"auto":"0px"})}):new icon("blank","0px","black").css({margin:"0px",padding:"0px"}),
    opt.includes("edit")?new edit(t,"80%"):new text(t,"80%").css({padding:"0px 10px",fontSize:"22px"}),
    opt.includes("options")?new icon("three-dots-vertical","18px","black").css("margin-left","auto"):new icon("blank","0px","black").css({margin:"0px",padding:"0px"})
    ));obj.list=function(a,b){obj.navbar.list(a).select(function(e,h){if(b)b(h);obj.navbar.css("height","0px")});return obj};obj.menu=function(a,call){obj.child(1).child(2).on("click",function(e){var cval=null;new modal(new stringlist(a).css({ position: "absolute", background: "var(--back)", maxWidth: "40%", maxHeight: "50%",minWidth:"150px", padding: "8px", margin: "10px", borderRadius: "12px", overflowX: "hidden", top:0,right:0}).select(function(a, b) { setTimeout(function(e){call(b)},10)}), "center,fadein").open().on("click", function(e) {history.back();})});return obj}
    if(type=="none")obj.css({background:"var(--back)",color:"var(--text)"}).child(1).css({height:"65px"}).shared("css",{"background-color":"var(--hue)"}).child(obj.bar.child(2)?1:0).css({background:"transparent",color:"var(--text)"})
    if(type=="solid")obj.css({background:"var(--hue)",color:"white"}).child(1).css({height:"65px"}).shared("css",{"background-color":"white"}).child(obj.bar.child(2)?1:0).css({background:"transparent",color:"white"})
    if(type=="solid-slit")obj.css({background:"var(--hue)","border-radius":"0px 0px 12px 12px",color:"white"}).child(1).css({height:"65px"}).shared("css",{"background-color":"white"}).child(obj.bar.child(2)?1:0).css({background:"transparent",color:"white"})
    if(type=="slit")obj.css({background:"var(--back)","border-radius":"0px 0px 12px 12px",color:"var(--text)"}).child(1).css({height:"65px"}).shared("css",{"background-color":"var(--hue)"}).child(obj.bar.child(2)?1:0).css({background:"transparent",color:"vat(--text)"})
return obj
}