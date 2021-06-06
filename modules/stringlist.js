function stringlist(s,w,h,opt){
  var obj=new list(new text("","100%").css({color:"inherit"}).bind({text: "a"}),w,h).css({"color":"var(--text)",overflowX:"hidden"})
  obj.push=function(a,b,c){obj.pushItem({a:a},b,c);return obj}
  obj.pop=function(a){obj.popItem(a);return obj}
  obj.list=function(a){var a=a.split(",");b=[];a.forEach(function(a){b.push({a:a})});obj.listItem(b);return obj}
  obj.select=function(e){obj.selectItem(function(a,b,c,d){e(a,b.a)});return obj}
  obj.list(s||"");
  return obj
}