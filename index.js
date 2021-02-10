var express = require('express')
var app = express()
const data = require('./data.json');

let PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
//   res.send('hello world');
    res.send('This is the main Index Page');
})

app.get('/users', (req, res) => {
    res.send(data);
})

app.listen(PORT, (req, res) => {
    console.log(`App running on port ${PORT}`)
});
