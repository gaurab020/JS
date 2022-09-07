const Person = function (name, id){
this.name = name;
this.id = id;
// this.details = function(){
//     setTimeout(function(){
//     console.log(this)
//     console.log(`${this.name} ${this.id}`);
//     }.bind(this),2000)
// }

this.details = function(){
    setTimeout(()=>{
    console.log(this)
    console.log(`${this.name} ${this.id}`);
    },2000)
}
}

let p = new Person('gaurab', 1)
p.details();




