'use strict';
var express = require('express')
var app = express()


// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static("style"));
var admin = require('./routes/api.js');

app.use('/admin',admin);


app.listen(3000, console.log('Example app listening on port 3000!'));
