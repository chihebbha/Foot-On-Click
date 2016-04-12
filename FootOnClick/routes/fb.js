
var express = require('express');
var router = express.Router();
var FB = require('fb');


FB.options ({'appId' : "1677506365854637"})
FB.options({ 'appSecret' : '7ea79627746bd10afe9c4ae37c59fef6' })
FB.options({'appNamespace' : "j'ai pas encore choisi"})
/* GET users listing. */



router.get("/data" , function (req, res) {
    FB.setAccessToken('CAAX1ruMLk60BAN45ccpya2T2fZCtNshpCKfKqVfAj0ogZAGnAvgwfZAEVFP6x9QBQxBfGcNoIFNL6UW4SKNa4e1o8HcTFpPYcu6gtoEPbk0kGsb12BM1mln9ioMXj63IZAAQ1nxhW7RCksJzECx8u6rCnZC0V3MzG7g7GxXUZCY9ceqljNQV1Pr3Bsw18BKfgZD');
    var rs = [];
    FB.api('/Cristiano?fields=posts{full_picture,comments,message}', function (result) {
        if (!result || result.error) {
            console.log(!result ? 'error occurred' : res.error);
            return;
        }

        console.log(result);



        // res.render("fb.twig" , {'result' : result['posts'].data});
        res.json(result)
    });
});





module.exports = router;
