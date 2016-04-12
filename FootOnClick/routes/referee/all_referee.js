/**
 * Created by hamdi_chebbi on 11/03/2016.
 */
var express = require('express');
var router = express.Router();
var models = require('../../models/user.js')
var mongoose = require('mongoose') ;




/* Referee */
router.get('/' , function(req,res,next){


    models.find(function (err,result) {
         //res.render('allReferee.twig',{models:models}) ;
       if(err){
           console.log('lol') ;
       }
     else{
           res.render('allReferee.twig',{"ref":result}) ;
        }
        console.log(result) ;
    })
}) ;

router.get('/lol',function(req,res){
    res.render('insta.twig',{title:'hello'});
});

module.exports = router;