function text(text,w,h,opt="",ext){
  obj=new tag("text",w,h).css({padding:"8px 10px",fontSize:"17px"});
  obj.align=function(e){if(e)obj.css("text-align",e);else return obj.css("text-align");return obj};obj.size=function(e){if(e)obj.css("font-size",e);else return obj.css("font-size");return obj};obj.color=function(e){if(e)obj.css("color",e);else return obj.css("color");return obj};
 if (opt.includes("html"))obj.html(text);else obj.text(text);if(opt.includes("center"))obj.align("center");if(opt.includes("small"))obj.size("14px");if(opt.includes("hue"))obj.color("var(--hue)")
  return obj
}