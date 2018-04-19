'use strict';

var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});


// mogoose connection
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mob");


// define schema
var nameSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  textarea: String,
  singlebutton: String })

  //define a modal
  var User = mongoose.model("User", nameSchema);


var twilio = require('twilio');


const accountSid = 'AC4001f6c00457ffd444ebef99d56a6342';
const authToken = '58ea778d9a657a4fa1ba53e8e9d84ea1';
const client = require('twilio')(accountSid, authToken);



router.get('call',function(req,res,next){
console.log("call to my number")
    client.calls.create(
        {
          url: 'http://demo.twilio.com/docs/voice.xml',
          to: '+918750014453',
          from: '+12015354271',
        },
        (err, call) => {
          console.log(call.sid);
        }
      );
      res.render('contact.ejs')


});

router.get('/', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('index.ejs')


});


// router.get('/blogDefault', function(req, res, next) {
//     console.log("Welcome to Mob")
//    res.render('blog-default.ejs')
  

// });

// router.get('/blogSingle', function(req, res, next) {
//     console.log("Welcome to Mob")
//     res.render('blog-single.ejs')
 

// });

router.get('/contact', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('contact.ejs',{data:req.query})
 

});

router.post('/contact',urlencodedParser, function(req, res, next) {
    console.log("Welcome to Mob")
    console.log("console my data===",req.body);
 
        var myData = new User(req.body);
        myData.save()
        .then(item => {
            res.render('contact.ejs',{data:req.query});
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
     
 

});



router.get('/pricing', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('pricing.ejs')
 

});


router.get('/serviceDetails', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('service-detail.ejs')
 

});


router.get('/serviceList', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('service-list.ejs')
 

});


router.get('/styleGuide', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('style-guide.ejs')
 

});


// router.get('/testimonial', function(req, res, next) {
//     console.log("Welcome to Mob")
//     res.render('testimonial.ejs')
 

// });



module.exports = router;
