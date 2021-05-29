function button(t,w,h,opt=""){
  var obj=new layout("row",w,h,"","button")
  .text(t||"button").align("center").justify("center")
  .css({padding:"10px",margin:"8px",fontSize:"17px","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19)","border-radius":"12px",background:"transparent",color:"#565656",border:0})
  
  return obj
}