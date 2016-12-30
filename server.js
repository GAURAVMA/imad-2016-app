var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var count=0;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'homepage.html'));
});
app.get('/ab', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/myblogmain.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myblogmain.html'));
});

app.get('/t', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Sorry.html'));
});

app.get('/old', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
