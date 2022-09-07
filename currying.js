let add = function (a,b){
    console.log(a + b)
}

let AddValue = add.bind(this,2);
AddValue(5);