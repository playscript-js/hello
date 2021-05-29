function text(text,w,h,opt="",ext){
  obj=new tag("text",w,h).css({padding:"8px 10px",fontSize:"17px"})
  opt.includes("html")?obj.html(text):obj.text(text)
  return obj
}