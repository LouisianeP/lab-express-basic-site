// sets up express
const express = require('express');
const app = express();

// this line is needed to register the public folder so that the content (all the public assets)
// is accessible in the browser
app.use(express.static(__dirname + '/public'));

// this is the route for the home page - a request to 'localhost:3000' executes the callback
// function
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/views/home.html')
})

// this is the route for the about page
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html')
})

// this is the route for the works page
app.get('/works', function (req, res) {
    res.sendFile(__dirname + '/views/works.html')
})

// starts the server
app.listen(3000, () => {
    console.log('Server listening');
})