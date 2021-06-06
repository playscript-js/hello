function modal(child="",opt=""){
  var obj=new layout(opt.includes("row")?"row":"column","100%","100%","","modal").css({"background":"rgba(0,0,0,.05)",zIndex:3,position:"fixed",top:0,bottom:0,left:0,right:0}).add(child)
  opt.includes("center")?obj.align("center").justify("center"):""
  obj.open=function(a){body.css({"overflow":"hidden"});history.pushState(null,null,null);html.add(obj);return obj}
  obj.fixed=function(a){if(a)obj.attr("fixed","true");else obj.attr("fixed","false");return obj}
  obj.close=function(a){history.back()}
  if(opt.includes("fadein"))obj.child(0).css("opacity",0).animate({opacity:1})
  return obj
}

