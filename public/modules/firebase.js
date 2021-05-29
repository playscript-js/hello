//create new accounts
setup.prototype.signup=function(acc,thn=function(e){console.log(e)}){
  rawfbdbrefvariable("users").child(acc.user).once("value").then(function(e){
    if(e.exists())thn(2,e)
    else rawfbdbrefvariable("users").child(acc.user).set(acc).then(function(e){thn(1,e)}).catch(function(e){thn(0,e)})
  })
  return this
}
//login
setup.prototype.login=function(acc,thn=function(e){console.log(e)}){
  rawfbdbrefvariable("users").child(acc.user).once("value").then(function(e){
    if(e.val().pass==acc.pass)thn(1,e)
    else thn(2,e)
  }).catch(function(e){thn(0,e)})
  return this
}
//setup delete
setup.prototype.deleteby=function(path,key,prp,thn=function(e){console.log(e)}){
  rawfbdbrefvariable(path).orderByChild(key).equalTo(prp).once("value", function(snapshot) {snapshot.forEach(function(child) {child.ref.remove();})}).then(function(e){thn(1,e)}).catch(function(e){thn(0,e)})
  return this
  }
//check app version