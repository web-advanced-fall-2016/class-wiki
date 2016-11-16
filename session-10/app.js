const http = require('http');
const express = require('express');

var favicon = require('serve-favicon');

const db = require('./db.js');

const port = 3000;

//this is our main application that handles all API endpoints
const app = express();

// favicon is a thirdparty package that provides a middleware to serve site's favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

// Every request coming to server will pass through this middleware.
app.use(function(req, res, next) {
    console.log("Received an HTTP Request!");
    console.log(`Request method is ${req.method}. it's for path: ${req.path}`);
    next();
});
// This middleware is supposed to return individual student info 
app.get('/students/:student_id', function(req, res, next) {
    // find the information of student with id = :student_id
    console.log("Received an For Student with id " + req.params.student_id);
    let student = db.getStudent(req.params.student_id);
    if (student)
        res.json(student);
    res.json({ message: "student not found" });
});

// This middleware is supposed to return list of all students
app.get('/students', function(req, res, next) {
    // find the list of the students and return it back
    res.json(db.getStudentsList());
});

// This middleware is supposed to return student bio
app.get('/students/:student_id/bio', function(req, res, next) {
    // find the bio of student with id = :student_id
});

// create our HTTP server and designate the application that will handle the requests coming to it.
// alternatively, you could provide a function(req,res){} to createServer() to handle the requests
// Express application does the saem thing plus a lot more and it's much more convenient to work with
const server = http.createServer(app);

// start listening on port (3000).
server.listen(port, () => {
    console.log(`Server running and listening at http://localhost:${port}/`);
});