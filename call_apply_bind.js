let name1 = {
    firstname: 'Gaurab',
    lastname: 'Singh',

}

let printFullName = function (town , city) {
    console.log(`${this.firstname} ${this.lastname} ${town} ${city}`);
}

let name2 = {
    firstname: 'Saurab',
    lastname: 'Singh',

}

//function borrowing...
printFullName.call(name2,'meerganj','bareilly')
printFullName.apply(name1,['meerganj','bareilly'])
const funBind = printFullName.bind(name2,'meerganj','bareilly'); //return function only
funBind();
