var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//---------Raja ---------
var FB = require('fb');

var FBroute = require('./routes/fb');



//-----------------End Raja

var cors = require('cors');
var routes = require('./routes/index');

var frenshMatch=require('./routes/frenshMatch');
var deutshMatch=require('./routes/deutshMatch');
var englishMatch=require('./routes/englishMatch');
var spanishMatch=require('./routes/spanishMatch');





var session=require('express-session');
var app = express();
//----------------------------------------------------------------------------------------------
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.use('/frenshMatch', frenshMatch);
app.use('/deutshMatch', deutshMatch);
app.use('/englishMatch', englishMatch);
app.use('/spanishMatch', spanishMatch);


//-------Raja---
app.use('/fb',FBroute);
//app.use('/claim',require('./routes/claim'));
app.use('/claim',require('./routes/claim'));
//-------raja-----




module.exports = app;
