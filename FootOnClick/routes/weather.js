/**
 * Created by hamdi_chebbi on 11/03/2016.
 */
var express = require('express');
var router = express.Router();

var we = require('weather-js') ;

/* Weather */
router.get('/', function(req, res, next) {
    we.find({search:'Tunis, TN', degreeType:'C'}, function(err,result){
        res.json(result) ;
        //res.render('weather.twig',{"takes":result}) ; 
    })

});

module.exports = router;
