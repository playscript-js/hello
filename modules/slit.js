setup.prototype.slit=function(str,pos,call){
  var obj=new modal(new stringlist(str,"92%").css({position:"absolute",background:"var(--back)",maxHeight:"90%",padding:"8px",margin:"0px 10px",borderRadius:"12px 12px 0px 0px",overflowX:"hidden","bottom":0}).select(function(a,b){setTimeout(function(){if(call)call(a,b)},10)}),"center").open().on("click",function(e){history.back()})
  return obj
}