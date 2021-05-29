class select extends text{
  constructor(obj={},w,h,opt){
    
   super(obj.title,w,h,opt)
   .on("click",this.selection.bind(this,obj.list))
   this.obj=obj;this.value=null
    return this
  }
  selection(e){
    new menu(e,null,this.onselected.bind(this))
  }
  onselected(e,h,d){
    this.value=h
    this.text(h)
    if(this.obj.call)this.obj.call(e,h,d);else console.log(e,h,d)
  }
  select(e){
    if(e!=undefined||e!=null){this.value=e
    this.text(e)}
    return this
  }
  
}
