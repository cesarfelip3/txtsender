// require express
var express = require('express');
var path = require('path');
var TMClient = require('textmagic-rest-client');

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


router.post('/send_free_sms', function (req, res) {
  var phonenumber = req.body.phone;
  var msg = req.body.message;
  var sender = req.body.sender;
  console.log(phonenumber);

  var c = new TMClient('felipealves', 'iv8agCnjIO5qPfqrLxExRIkDkkdMWh');
  c.Messages.send({text: msg, phones: phonenumber}, function(err, res){
    console.log('Messages.send()', err, res);
  });

  res.send('Your menssage was sent.');



});
