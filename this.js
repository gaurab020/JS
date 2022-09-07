var Person = function(name, id){
    this.name = name;
    this.id = id;
    this.details = function x(){
      // console.log(this);
        setTimeout(function(){
            
            console.log(`${this.name} ${this.id}`);
        }.bind(this),2000)


    }
}
let newPerson = new Person('gaurav', 1001);
newPerson.details();