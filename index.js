app=new setup({type:"matte",import:"slit,modernlist,toggle,menu"})

start=e=>{
  x=new bar("hi hello","none","options,drawer").list("home,contacts,more")
  x.menu("1,2,3",e=>app.alert(e))
  m=new button("press me").on("click",e=>{app.slit("hello there,hi,how are ya,1,2,3,4,5,6,7,8","topleft",e=>alert(e))})
  b=new modernlist([{title:"title",body:"body",src:"cover.gif"},{title:"t2",body:"bod2",src:"cover.gif"}]);i=0
  while (i<10){b.push({title:"im in",body:"yay",src:"cover.gif"},0);i++}
  n=new toggle("hiya")
  j=new button("haii").css({position:"sticky",bottom:0})
  body.add(x,m,b,j,n)
  app.menu("hey","top",e=>app.alert("howya"))
}