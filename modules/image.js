function image(url,w,h,opt){
  obj=new tag("image",w||"150px",h||"150px")
  obj.url=function(e){if(e)obj.css("background-image",`url(${e})`);else return obj.css("background-image");return obj}
  obj.repeat=function(e){if(e)obj.css("background-repeat",`url(${e})`);else return obj.css("background-repeat");return obj}
  obj.scale=function(e){if(e)obj.css("background-size",e);else return obj.css("background-size");return obj}
  obj.url(url||"about:blank").scale("cover").repeat("no-repeat")
  return obj
}