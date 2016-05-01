/**
 * Created by raja on 30/04/2016.
 */

var express = require('express');
var router = express.Router();
var request=require('request');

var mLab = require('mongolab-data-api')('uvxRwGeN6nKy9oQt5hg7yKYLltgGAbyN');


var url = 'http://api.football-data.org/v1/fixtures?timeFrame=p1';

var entete={headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
},
    'uri':url};
var bet="";


router.get('/betF', function(req, res, next) {
    request(entete, function (err, data){


        var bet = {
            database: 'footonclick',
            collectionName: 'bet',


        };

        mLab.listDocuments(bet, function (err, data) {
            console.log(data);
            res.jsonp(data);
        });



    });
});
//-----------------------------------------------

var user="";


router.get('/userB', function(req, res, next) {
    request(entete, function (err, u) {

        var user = {
            database: 'footonclick',
            collectionName: 'user',

        };

        mLab.listDocuments(user, function (err, u) {
            console.log(u);
            res.jsonp(u);
        });
    });
});




////-----------------------------------------------

//
// var betM = "http://localhost:3000/bet/betF";
//
//  var userB ="http://localhost:3000/bet/userB";
//
//router.get('/resultBet' , function (req , res , next){
//
//  for (f in url.fixtures)
//  {
//         if( f.links.self.href == betM.matchs.id  )
//         {
//
//             if ((f.result.goalsHomeTeam > f.result.goalsAwayTeam) && (betM.choix == '1'))
//             {
//                 userB.solde = betM.mise * betM.cote ;
//
//             }
//
//             else
//             {
//                 userB.sole= userB.solde ;
//
//             }
//
//             if ((f.result.goalsHomeTeam < f.result.goalsAwayTeam) && (betM.choix == '2'))
//
//             {
//                 userB.solde = betM.mise * betM.cote ;
//
//             }
//
//             else
//             {
//                 userB.sole= userB.solde ;
//
//             }
//
//             if ((f.result.goalsHomeTeam ==f.result.goalsAwayTeam) && (betM.choix == 'x'))
//
//             {
//                 userB.solde = betM.mise * betM.cote ;
//
//             }
//
//             else
//             {
//                 userB.sole= userB.solde ;
//
//             }
//
//
//
//
//
//
//                 }
//
//     }
//
//
// });


        module.exports = router;
