//var express = require('express');
//var router = express.Router();
//
//var mailer=require('nodemailer');
//var smtpTransport = mailer.createTransport("SMTP",{
//    service: "Gmail",
//    auth: {
//        user: "cyrine.arbi@esprit.tn",
//        pass: "cyrina99"
//    }
//});
//router.post('/', function(req, res, next) {
//    var mail = {
//        from: 'cyrine.arbi@esprit.tn',
//        to: req.body.user.email,
//       
//        name: req.body.user.name
//        //html: "<b>Node.js New world for me</b>"
//    };
//
//    smtpTransport.sendMail(mail, function(error, response){
//        if(error){
//            res.send(error);
//        }else{
//            res.send("Message sent: " + response.message);
//        }
//
//        smtpTransport.close();
//    });
//
//    
//
//
////http://chchow.me/a-full-stack-adventure/
//});
//
//
//module.exports = router;



var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();


router.get('/send_mail', function(req, res, next){
	
	EmailVerif("mail de reception");
	
	res.send("Mail Envoye avec succes");
}) ;
 
EmailVerif = function(recepient) {
  var transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
      user: 'cyrine.arbi@esprit.tn',
      pass: 'cyrina99'
    }
  });
  var mailOptions = {
    from: 'cyrine.arbi@esprit.tn',
    to:'cyrino.arbi21@gmail.com',
    subject: 'subject',
    text: ' newsletter '
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    } else {
      console.log('Email Sent');
    }
  });
};


module.exports = router;
