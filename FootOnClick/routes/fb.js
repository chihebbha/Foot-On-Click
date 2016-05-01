
var express = require('express');
var router = express.Router();
var FB = require('fb');


//FB.options ({'appId' : "675139222625762"})
//FB.options({ 'appSecret' : '71d199b5dc9820cc135d7ba6f3a3ff44' })
//FB.options({'appNamespace' : "j'ai pas encore choisi"})
/* GET users listing. */




router.get("/data" , function (req, res) {
    FB.setAccessToken('CAACEdEose0cBAFCPkuyQkC2ZCcSfjPYjfjtdrHdJmelrtimZC1MnWU483ZAnhY69v2LFzNZBM8av5NoXsuLoYgCSkr3gC1fQvVukNvYEPVHgRZCY0lHiLaOGyM2pBPuyL5GGczqHhqovGfzOxPPweMhZALTm1ixyZCoefatYfw0LrmfORrpSBJ8oPo7qarlAjO7TiFpDpHjMv9KQDsVCYW36TJWOqsRfSAZD');
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
