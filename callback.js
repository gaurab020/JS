setTimeout(() => {
    console.log('setTimeOut...');  
}, 5000);

function x(y)
{ //y is call back
    console.log('x');
    y();
}

let y=function() {
    console.log('y')
}
x(y)