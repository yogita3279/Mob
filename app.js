'use strict';
var express = require('express')
var app = express()
var flash = require('connect-flash');

//   app.use(express.cookieParser('keyboard cat'));
//   app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());



// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static("style"));
var admin = require('./routes/api.js');

app.use('/admin',admin);


app.listen(3000, console.log('Example app listening on port 3000!'));
