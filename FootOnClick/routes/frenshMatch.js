var express = require('express');
var router = express.Router();
var request=require('request');
var mLab = require('mongolab-data-api')('uvxRwGeN6nKy9oQt5hg7yKYLltgGAbyN');

var url='http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=n10';
var entete={headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
},
    'uri':url};
var match="";
/* GET users listing. */


router.get('/nextMatch', function(req, res, next) {
    request(entete, function (err, data){

        var  flux=JSON.stringify(JSON.parse(data.body));
        match=JSON.parse(flux).fixtures;
        mLab.insertDocuments({
            database: 'footonclick',
            collectionName: 'match',
            documents: match
        },function(req,res){console.log("ajput avec succee");});
        res.render('nextMatchFrensh.twig',{data:match});
    });
});

//-------------------------------------------------------------------------------------------
router.get('/pastMatch', function(req, res, next) {

    request({headers:{
        'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
    },
        'uri':'http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=p10'}, function (err, data){
        var  flux=JSON.stringify(JSON.parse(data.body));
             match=JSON.parse(flux).fixtures;
        for(var i=0;i<match.length;i++){
            var dateee=match[i].date.toString();
            match[i].date=dateee.substring(0,10)+"|----|"+dateee.substring(11,16);
        }
        mLab.insertDocuments({
            database: 'footonclick',
            collectionName: 'match',
            documents: match
        },function(req,res){console.log("ajput avec succee");});
        res.render('apiFrensh.twig',{data:match});
    });
});
//----------------------------------------------------------------
router.get('/morePast', function(req, res, next) {

    request({headers:{
        'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
    },
        'uri':'http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=p30'}, function (err, data){
        var  flux=JSON.stringify(JSON.parse(data.body));
        match=JSON.parse(flux).fixtures;
        for(var i=0;i<match.length;i++){
            var dateee=match[i].date.toString();
            match[i].date=dateee.substring(0,10)+"|----|"+dateee.substring(11,16);
        }
        mLab.insertDocuments({
            database: 'footonclick',
            collectionName: 'match',
            documents: match
        },function(req,res){console.log("ajput avec succee");});
        res.render('apiFrensh.twig',{data:match});
    });
});
//-------------------------------------------------------------------------------------------
router.get('/moreNext', function(req, res, next) {
    request({headers:{
        'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
    },
        'uri':'http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=n30'}, function (err, data){
        var  flux=JSON.stringify(JSON.parse(data.body));
        match=JSON.parse(flux).fixtures;
        mLab.insertDocuments({
            database: 'footonclick',
            collectionName: 'match',
            documents: match
        },function(req,res){console.log("ajput avec succee");});
        res.render('nextMatchFrensh.twig',{data:match});
    });
});
//-----------------------------------------------------------------------------------------------------
router.post('/team',function(req, res, next){
    request({headers:{
        'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
    },
        'uri':req.body}, function (err, data){
        var  flux=JSON.stringify(JSON.parse(data.body));
        match=JSON.parse(flux);
        res.render('apiFrensh.twig',{data:match});
    });

});



module.exports = router;
