const obj = {
 
    company:"rbs",
    other:{address:"meerganj"}
}

function test(obj){
    for(let i in obj){
        if(typeof obj[i] == "object")
        test(obj[i])
        else
        console.log(obj[i])
          
    }
}
test(obj)
