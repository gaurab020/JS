let myStr = "applepe";

String.prototype.vowelCount = function(callback){
const vowels = ['a','e','i','o','u'];
let count = 0;

for(const value of this){
    if(vowels.includes(value))
    count++;
}
callback(count);

}

myStr.vowelCount((count)=>console.log(count));

