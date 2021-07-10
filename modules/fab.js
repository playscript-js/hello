function fab(i,w="35px",opt=""){
  var obj=new layout("column",w,w,"solid,shadow").add(new icon(i,"100%","var(--hue)")).css({"border-radius":"100px",padding:"12px",position:"fixed",bottom:0,margin:"20px",zIndex:1}).css(opt.includes("left")?"left":"right","0px").align("center").justify("center")
  return obj
}