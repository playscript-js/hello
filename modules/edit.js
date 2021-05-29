function edit(hint,w,h,opt="",ext){
  var obj=new tag("edit",w||"50px",h).attr({contentEditable:true,hint:hint||"edit"}).css({padding:"8px 10px",fontSize:"17px",outline:0})
  obj.hint=function(a){if(a)obj.attr("hint",a);else return obj.attr("hint");return obj}
  return obj
}