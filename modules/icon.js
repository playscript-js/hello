function icon(type,w,c){
  if(!c){c=w;w="25px"}
  obj=new layout("icon",w,w,"","icon")
  .css({margin:"10px",background:c||"#565656","-webkit-mask":`url(icons/${type}.svg) no-repeat center`,"-webkit-mask-size":"cover"})
  obj.fill=function(e){if(e)obj.css("background-color",e);else return obj.css("background-color");return obj}
  return obj
}