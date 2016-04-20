var express = require('express');
var router = express.Router();

var mailer=require('nodemailer');
var smtpTransport = mailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "bmt.transportpublic@gmail.com",
        pass: "azerty100"
    }
});
router.get('/', function(req, res, next) {
    var mail = {
        from: 'bmt.transportpublic@gmail.com',
        to: req.body.user.email,
       
        name: req.body.user.name
        //html: "<b>Node.js New world for me</b>"
    };

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            res.send(error);
        }else{
            res.send("Message sent: " + response.message);
        }

        smtpTransport.close();
    });

    


//http://chchow.me/a-full-stack-adventure/
});


module.exports = router;