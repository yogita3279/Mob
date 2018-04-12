'use strict';

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('index.ejs')


});


router.get('/blogDefault', function(req, res, next) {
    console.log("Welcome to Mob")
   res.render('blog-default.ejs')
  

});

router.get('/blogSingle', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('blog-single.ejs')
 

});

router.get('/contact', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('contact.ejs')
 

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


router.get('/testimonial', function(req, res, next) {
    console.log("Welcome to Mob")
    res.render('testimonial.ejs')
 

});



module.exports = router;
