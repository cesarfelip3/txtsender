// require express
var express = require('express');
var path = require('path');


// create our router object
var router = express.Router();

module.exports = router;

// route our homepage
router.get('/', function(req, res) {
    res.render("pages/index");

});

router.get('/faq', function(req, res) {
   res.render('pages/faq');
});

router.get('/send_free_sms', function(req, res) {
    res.render('pages/sendsms');
});


router.post('/contact', function (req, res) {

});
