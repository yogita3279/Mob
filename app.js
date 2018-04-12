'use strict';
var express = require('express')
var app = express()


// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static("style"));

 
app.get('/', function (req, res) {
  res.render('index.ejs')
})
 
app.listen(3000, console.log('Example app listening on port 3000!'));
