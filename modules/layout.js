function layout(type,w,h,opt="empty",n="layout"){
  var obj=new tag(n,w,h).css({overflow:opt.includes("scroll")?"scroll":"hidden",background:opt.includes("solid")?"var(--back)":"transparent",display:"flex",flexDirection:type||"column",overflow:"hidden","box-shadow":opt.includes("shadow")?"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)":"","border-radius":opt.includes("round")?"12px":"0px","align-items":"flex-start"})
  obj.flow=function(a){if(a)obj.css("flex-direction",a);else return obj.css("flex-direction");return obj}
  obj.scroll=function(a){if(a)obj.css("overflow",a);else return obj.css("overflow");return obj}
  obj.align=function(a){if(a)obj.css("align-items",a);else return obj.css("align-items");return obj}
  obj.wrap=function(a){if(a)obj.css("flex-wrap",a);else return obj.css("flex-wrap");return obj}
  obj.justify=function(a){if(a)obj.css("justify-content",a);else return obj.css("justify-content");return obj}
  opt.includes("center")?obj.align("center").justify("center"):""
    return obj
}