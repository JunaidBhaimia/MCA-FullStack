const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const url = req.url;

    if (url === '/about') {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }
}).listen(3000, function () {
    console.log("server start at port 3000");
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to about us page');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to contact us page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});







