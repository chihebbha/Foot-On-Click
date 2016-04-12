var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');

var frenshMatch=require('./routes/frenshMatch');
var deutshMatch=require('./routes/deutshMatch');
var englishMatch=require('./routes/englishMatch');
var spanishMatch=require('./routes/spanishMatch');


// cyrine

// log File
var logger = require('express-logger') ;

var weather = require('./routes/weather');
var sports = require('./routes/sports');
var referee = require('./routes/referee/all_referee'); // AllReferee link
///var timeline = require('./routes/timeline'); // TimeLine link
// End cyrine


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



////cyrine

var ig = require('instagram-node').instagram();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

ig.use({ client_id: '88092373fad24e649152152430554170',
         client_secret: '71bfc26f83124a668792c029b6a2ad96' });
ig.use({ access_token: '224236382.1677ed0.7ce35479a1ab4a678a43ef3c5c6fe637' });


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

app.use('/', routes);

app.use('/frenshMatch', frenshMatch);
app.use('/deutshMatch', deutshMatch);
app.use('/englishMatch', englishMatch);
app.use('/spanishMatch', spanishMatch);


// Cyrine

// fichier de sauvegarde du LOG de l'applixation

// Weather :
app.use('/weather', weather);

app.use('/sports', sports);
app.use('/referee', referee); // referee route
//app.use('/timeline', timeline); // timeline route

// End Cyrine


exports.authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

exports.handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};

// This is where you would initially send users to authorize
app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI
app.get('/handleauth', exports.handleauth);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
// End Cyrine


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
