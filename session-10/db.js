// this file is supposedly our Database
// for now we can save data in filesystem
// later db.js can link to a real Database like MongoDB or mySQL or Postgres, ...
// as long as it provides the same functions that it's providing now, in order to migrate to a real DB,
// you don't need to change anything else in other parts of our application
// This is the idea of modularity and separation of functions, tasks and responsibility
// so that you can replace or change individual components of your application
// wihtout troubling other parts. 
var students = require('./students.json');

var db = {
    getStudentsList: function() {
        var st = Object.assign({}, students);
        return st;
    },
    getStudent: function(index) {
        for (student of students) {
            if (student.id == index)
                return Object.assign({}, student);
        }
        return false;
    },
    getStudentBio: function(id) {

    },
    addStudent: function(student) {

    }
};

module.exports = db;