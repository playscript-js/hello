setup.prototype.page=function(url,opt=""){
  var obj=new modal(new tag("iframe","100%","100%").css({border:0}).attr(opt.includes("html")?"srcdoc":"src",url)).open();return obj
}