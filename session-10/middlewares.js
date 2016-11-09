const http = require('http');
const express = require('express');
const port = 3000;

const app = express();
// .use
// .get
// .post
// .delete
// .options
app.use(function(req, res, next) {
    console.log("Received an HTTP Request!");
    console.log(`Request method is ${req.method}. it's for path: ${req.path}`);
    next();
});
app.use('/', function(req, res, next) {
    console.log("Received an HTTP Request for Root folder!");
    next();
});
app.get('/', function(req, res, next) {
    console.log("Received an HTTP GET Request for Root folder!");
    next();
});
app.use('/routeone', function(req, res, next) {
    console.log("Received an HTTP  Request for route one!");
    next();
});
app.use('/routetwo', function(req, res, next) {
    console.log("Received an HTTP  Request for route two!");
    next();
});
app.get('/routeone', function(req, res, next) {
    console.log("Received an HTTP GET Request for route one!");
    next();
});

app.get('/routtwo', function(req, res, next) {
    console.log("Received an HTTP GET Request for route two!");
    next();
});
app.post('/', function(req, res) {
    console.log("Received an HTTP GET Request for Root folder!");
    res.send('Hello POST');
});

app.use(function(req, res, next) {
    console.log("I am the last middleware! responsing.");
    res.send('Thanks for contacting');
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running and listening at http://localhost:${port}/`);
});