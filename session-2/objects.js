console.log("========First Method to Create Objects=========");

let student = { // Instanciating an object using Object literal
    "name": "Saman",
    "id": "N0013352",
    "birthYear": 1991,
    "getAge": function() {
        let date = new Date();
        return date.getUTCFullYear() - this.birthYear;
    },
    "gender": false, // false => male , true => female ???
    "courses": [],
};
console.log(student);

student.courses.push("Web Advanced"); // inserts a new element in "courses" property of our object
student.gender = true; // modifying a property
student.degree = ['MFA']; // adding new property to our object

console.log(student);

console.log("========Second Method to Create Objects=========");

let empty = Object.create(null); // this create an empty object and sets its prototype to null.

let badStudent = Object.create(student); // creates a new empty object and sets its __proto__ to student 
console.log(badStudent); //empty object. logs : {}
badStudent.degree = []; // adding new property to badStudent
console.log(badStudent);

console.log(badStudent.__proto__); // logs the student function

console.log(badStudent.gender); // badStudent doesn't have gender as its own property, but its __proto__ has that property. 

console.log("========Third Method to Create Objects=========");

function Student(n) {
    this.name = n;
}
Student.prototype.changeName = function(n) {
    this.name = n;
};

let lazyStudent = new Student('Ali');
console.log(lazyStudent);
lazyStudent.changeName('Saman');
console.log(lazyStudent);


console.log("========Fourth Method to Create Objects(ES2015 OR ES6)=========");


class Teacher {
    constructor(n) {
        this.name = n;
    }
    changeName(n) {
        this.name = n;
    }
}

let oldTeacher = new Teacher("Sarah");
console.log(oldTeacher.name);
oldTeacher.changeName("Eliza");
console.log(oldTeacher.name);