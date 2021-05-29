function list(data,w,h,opt={}){
  var obj=new layout(opt.flow||"column",w,h,"","list")
  
  obj.push=function(a,b,c){
    var x=new clone(c)
  }
  return obj
}