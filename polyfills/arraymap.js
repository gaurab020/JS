const myArray = [1,2,3,4,5];
Array.prototype.customForeach = function(callback){
    arr = [];
    for(let i = 0; i < this.length; i++){
       arr.push(callback(this[i], i));
    }
    return arr;
}

const newArray = myArray.customForeach((item, index)=> item)
console.log(newArray)