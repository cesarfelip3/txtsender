var express = require("express");
var app = express();


app.use('/public', express.static('public'));

var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/faq",function(req,res){
  res.sendFile(path + "faq.html");
});

router.get("/send_free_sms",function(req,res){
  res.sendFile(path + "sendsms.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
