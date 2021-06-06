function image(url,w,h,opt){
  obj=new tag("img",w||"150px",h||"150px")
  obj.src=function(e){if(e)obj.attr("src",e);else return obj.attr("src");return obj}
  obj.repeat=function(e){if(e)obj.css("background-repeat",`url(${e})`);else return obj.css("background-repeat");return obj}
  obj.scale=function(e){if(e)obj.css("object-fit",e);else return obj.css("object-fit");return obj}
  obj.src(url||"about:blank").scale("cover").repeat("no-repeat")
  return obj
}