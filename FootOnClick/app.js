var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


//---------Raja ---------
var FB = require('fb');

var FBroute = require('./routes/fb');

var Betroute = require('./routes/betF');

var chat = require('./routes/chat');

var client = require('twilio')('AC03d7e8686873ebfaeb3ac18152907fdb', '1d208037b2e7e1f9b904509a64c4c34f');




//-----------------End Raja
var routes = require('./routes/index');

//CYRINE//
var users = require('./routes/users');
var weather = require('./routes/weather');
var reservation = require('./routes/reservation');
var newslleter = require('./routes/newslleter');

//cyrine

var http = require('http') ;
var twig = require('twig') ;

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
//cyrine
var ig = require('instagram-node').instagram();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(function(req,res,next){
//  //res.setHeader('Access‐Control‐Allow‐Origin','*');
// // res.setHeader('Access‐Control‐Allow‐Methods','GET, POST, OPTIONS, PUT, PATCH,DELETE');
//  //res.setHeader('Access‐Control‐Allow‐Headers',​'X‐Requested‐With,content‐type');
//  res.setHeader('Access‐Control‐Allow‐Credentials',true);
//  next();
//
//});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//cyrine
ig.use({ client_id: '88092373fad24e649152152430554170',
         client_secret: '71bfc26f83124a668792c029b6a2ad96' });
ig.use({ access_token: '224236382.1677ed0.7ce35479a1ab4a678a43ef3c5c6fe637' });



app.use('/', routes);
//cyrine
app.use('/users', users);
app.use('/weather', weather);
app.use('/reservation', reservation);
app.use('/newslleter', newslleter);

//cyrine


app.use('/frenshMatch', frenshMatch);
app.use('/deutshMatch', deutshMatch);
app.use('/englishMatch', englishMatch);
app.use('/spanishMatch', spanishMatch);






//raja
app.use('/bet', Betroute),
app.use('/chat', chat);
app.use('/claim',require('./routes/claim'));
app.use('/fb',FBroute);

// raja sms


app.get('/testtwilio', function(req, res) {
    client.sendMessage({
        to: '+21626722919',
        from: '+14439917726',
        body: 'réclamation reçue'
    }, function(err, data) {
        if (err){
            console.log(err);
        }else{
            console.log(data);
            res.json(data);
        }


    });
});


//end raja sms


//raja
// catch 404 and forward to error handler




module.exports = app;
