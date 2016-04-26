
var express = require('express');
var router = express.Router();
var FB = require('fb');


//FB.options ({'appId' : "675139222625762"})
//FB.options({ 'appSecret' : '71d199b5dc9820cc135d7ba6f3a3ff44' })
//FB.options({'appNamespace' : "j'ai pas encore choisi"})
/* GET users listing. */




router.get("/data" , function (req, res) {
    FB.setAccessToken('CAACEdEose0cBABdrmbidgR41pLRaSGRZAmMe2CIZAO6iaZBffCuZAo2u1fpBbpXf5XjLDZA8sDXpqNd46kW3Ga0CqfTsSdxyUdLJVzfTNYRkuUDz1KzQeq7DwZCDsIu9mcz47oZBK9lTNwFHb45beg3lGL8ZB0ztl5H3vSZBYsiQWJi6nCZB4TVeUvedSVCZBBHyaZAA4iZA8A5JXQUYWC8cQvxxZA3Bzm0NSTK9UZD');
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
