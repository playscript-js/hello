setup.prototype.menu=function(str,pos="center",call){alert(pos)
  var obj=new modal(new stringlist(str).css({position:"absolute",background:"var(--back)",maxWidth:"40%",minWidth:"150px",maxHeight:"50%",padding:"8px",margin:"10px",borderRadius:"12px",overflowX:"hidden",top:pos.includes("top")?0:"auto",bottom:pos.includes("bottom")?0:"auto",left:pos.includes("left")?0:"auto",right:pos.includes("right")?0:"auto"}).select(function(a,b){setTimeout(function(){if(call)call(a,b)},10)}),"center,fadein").open().on("click",function(e){history.back()})
  return obj
}