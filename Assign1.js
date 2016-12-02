
// Normal ES5 function

function Person(name) {
    this.name = name;
}
Person.prototype.prefixName = function (arr) {
    return arr.map(function (character){
        return this.name + character;
        }, this);
};

// Arrow function

function Person(name){
    this.name = name;
}
Person.prototype.prefixName = (arr) =>{
    return arr.map((character) => this.name + character);
};

// Object destructuring and printing the Details in console

let objPerson = {
    firstname:'Rajesh',
    lastname:'Roy',
    dob:'04-04-1985'
}
let {firstname:fn,lastname:ln,dob:db} = objPerson;
function personDetails(){
    return "The name of person is " + fn + " " + ln + " and his date of birth is " + db;
}
console.log(personDetails());

// Array destructuring

let name = ["Sanjay", "Abhra", "Sayan"];
let [A, B, C] = name;

console.log(A);
console.log(B);
console.log(C);

// ES6 - Variable Scoping

function userDetails(){
    let name;
    if(true){
        let name = "Kaustabh";
        console.log(name); // Print name Rahul
    }
    console.log(name); // ReferenceError
}
