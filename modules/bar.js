function bar(t,type="none",opt=""){
  var obj=new layout("row","100%",null,"shadow","bar")
  .align("center").css({position:"sticky",top:"0px",zIndex:1})
  .add(
    opt.includes("drawer")?new icon("list"):"",
    opt.includes("edit")?new edit(t,"80%"):new text(t,"80%").css({padding:"0px 10px",fontSize:"22px"}),
    opt.includes("options")?new icon("three-dots-vertical","18px","black").css("margin-left","auto"):""
    )
    if(type=="none")obj.css({background:"var(--back)",height:"65px"}).shared("css",{"background-color":"var(--hue)"}).child(obj.child(2)?1:0).css({background:"transparent",color:"var(--text)"})
    if(type=="solid")obj.css({background:"var(--hue)",height:"65px"}).shared("css",{"background-color":"white"}).child(obj.child(2)?1:0).css({background:"transparent",color:"white"})
    if(type=="solid-slit")obj.css({background:"var(--hue)",height:"65px","border-radius":"0px 0px 12px 12px"}).shared("css",{"background-color":"white"}).child(obj.child(2)?1:0).css({background:"transparent",color:"white"})
    if(type=="slit")obj.css({background:"var(--back)",height:"65px","border-radius":"0px 0px 12px 12px"}).shared("css",{"background-color":"var(--hue)"}).child(obj.child(2)?1:0).css({background:"transparent",color:"vat(--text)"})
return obj
}