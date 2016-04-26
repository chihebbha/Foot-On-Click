
var express = require('express');
var router = express.Router();
var FB = require('fb');


//FB.options ({'appId' : "675139222625762"})
//FB.options({ 'appSecret' : '71d199b5dc9820cc135d7ba6f3a3ff44' })
//FB.options({'appNamespace' : "j'ai pas encore choisi"})
/* GET users listing. */



router.get("/data" , function (req, res) {
    FB.setAccessToken('CAACEdEose0cBAFUrOHyGVuKKb6t6ZB9V7zotfcnpX6AEdpbibtLjZBrYuZBZBKRZArMi3nSTikbGYsnSQZCWPv17fy8P0rtm5ck5ZCiZChsqAOLQ26CxGcH0Y3NKn97Hr2RjRUJdRD3YQZAQgk1fhFdzEFjxFolUZALsBpr8wXNEx2ZCWZAb5AME4CQvx45EpDCPxzRa0kckYVm4ZBZCqBOHJH9N1C2Bs1QvQJVksZD');
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
