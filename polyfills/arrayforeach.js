const myArray = [1,2,3,4,5];
Array.prototype.customForeach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i);
    }
}

myArray.customForeach((item, index)=>console.log(item))