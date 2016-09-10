//express

var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');


var port = 3000;
var router = require('./app/routes');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);


app.use('/', router);




app.listen(port, function () {
    console.log('working');
});
