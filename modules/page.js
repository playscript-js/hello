setup.prototype.page=function(url,opt=""){
  var obj=new modal(new tag("iframe","100%","100%").css({border:0}).attr({void:0,src:url||"about:blank"})).open();return obj
}