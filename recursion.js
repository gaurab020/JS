let fab = function(n){   //0,1,1,3,5,8....
    if(n==1)
    return 0;
    if(n==2)
    return 1;
    return fab(n-1)+fab(n-2);
   
}

let fabPrint = function (){

    for(let i=1; i<=6; i++){
        console.log(fab(i));
    }
}
fabPrint();

