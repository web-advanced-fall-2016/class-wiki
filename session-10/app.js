const http = require('http');
const express = require('express');
var favicon = require('serve-favicon');

const port = 3000;
const app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(function(req, res, next) {
    console.log("Received an HTTP Request!");
    console.log(`Request method is ${req.method}. it's for path: ${req.path}`);
    res.send('Thanks for reaching out!');
    //res.end() This method just quickly ends the response process with node returned data
    //res.status(404).end();

    //res.json() This method responds with a JSON format.
    //res.json({ message: 'Thanks for reaching out!' });
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running and listening at http://localhost:${port}/`);
});