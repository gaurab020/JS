function Person(){
this.name = 'Gaurab',
this.id = '12'

}
Person.prototype.city = 'bareilly' 
var person = new Person();
console.log(person.city);

const obj = {
id:4321

}
const obj1 = {
    cool: ()=> console.log('cool....')
}

obj.prototype = obj1;
console.log(obj)