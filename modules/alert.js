setup.prototype.alert=function(t,opt={}){
  var obj=new modal(new layout("column","70%",null,"round,shadow,solid,center").add(new text(t),new text(opt.buttonText||"ok").css({color:"var(--hue)"}).on("click",function(){opt.callback?opt.callback():history.back()})),"center")
  obj.open()
  return obj
}