// import HTTP server module
let http = require('http');
// import Express module
let express = require('express');
// make an instance of express ( in other word, make instance of your application) 
let app = express();
// create an HTTP serve and assign 'app' as it's request listener
// meaning that every request to this server will be resolved and handled by 'app'
let server = http.createServer(app);
let port = 8000;
// invoking .listen(PORT[,callback]) function will initiate server's action, as it will
// start listening for requests coming to it.
// the optional callback function will be invoked as soon as the server starts listening 
server.listen(port, function() {
    console.log(`Server is running on ${port} port!`);
});

// HTTP requests with any method for '/public' path will be passed to the following middleware.
app.use('/public', express.static('./public'));

// HTTP requests with 'POST' method for '/students' path will be passed to the following middleware.
app.post('/students', function(req, res, next) {
    console.log('Got a request students');
    // All requests coming here will halt in this middleware!
    // Every middleware must either resolve/handle the request by responding back
    // OR pass the request to the 'next' middleware.
});
// HTTP requests with 'GET' method for '/teachers' path will be passed to the following middleware.
app.get('/teachers', function(req, res, next) {
    console.log('Got a request for teachers');
    // Every request coming to this middleware will get replied with text "Hello From Teacher!"
    res.send('Hello from Teacher!');
});