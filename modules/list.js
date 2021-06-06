function list(temp,w,h,opt={}){
  var obj=new layout(opt.flow||"column",w,h,"scroll","list").scroll("auto")
  obj.temp=new clone(temp)
  obj.call=function(a,b,c,d){console.log(a,b,c,d)}
  obj.on("click",function(){obj.hashtrue()})
  obj.listdata=[]
  
  
  
  obj.pushItem=function(a,b,c){
    if(typeof b=="undefined")obj.listdata.push(a);else obj.listdata.splice(b,c?1:0,a)
    var x=new clone( obj.temp).attr("id","false")
    if(x.attr("bind")){
    var tjson=JSON.parse(x.attr("bind"))
    var tkeys=Object.keys(tjson)
    x.css(a[tjson.css]||{})
    x.text(a[tjson.text]||"")
    for(var i=0;i<tkeys.length;i++){
    if(tkeys[i]!="text"&&tkeys[i]!="css")x.attr(tkeys[i],a[tjson[tkeys[i]]])
    }}
      var lst=x.children("deep")
      for(var i=0;i<lst.length;i++){
      lst[i].attr({"id":"false","onclick":"this.id=true"})
      if(lst[i].attr("bind")){
      var tjson=JSON.parse(lst[i].attr("bind"))
      var tkeys=Object.keys(tjson)
      lst[i].css(a[tjson.css]||{})
      lst[i].text(a[tjson.text]||undefined)
      for (var i2 = 0; i2 < tkeys.length; i2++) {
        if(tkeys[i2]!="text"&&tkeys[i2]!="css")lst[i].attr(tkeys[i2], a[tjson[tkeys[i2]]])
      }
    }}
    if(c)obj.remove(b)
    obj.ins(x,b)
    x.attr("onclick","this.id=true")
    return obj
  }
  obj.popItem=function(pos){obj.listdata.splice(pos,1);obj.listItem(obj.listdata);return obj}
  obj.selectItem=function(call){obj.call=call;return obj}
  obj.listItem=function(e){if(e){
    obj.listdata=[];obj.empty()
     for(var i3=0;i3<e.length;i3++){obj.pushItem(e[i3])}}
  else{return this.listdata}}
  obj.hashtrue=function(){
    var x=obj.raw.querySelectorAll("#true")
    var m=new tie(x[0]).attr("id","false")
    var y=new tie(x[x.length-1]).attr("id","false").attr("return")
    
    this.call(m.index()+1,this.listdata[m.index()+1],y||null,m,"∆")
    m={}}

  return obj
}