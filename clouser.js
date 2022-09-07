
function x(){
    var a =21;
  return ()=>{
      a = a + 1;
        console.log(a)
    }
   
}
const a = x();
a();
a();