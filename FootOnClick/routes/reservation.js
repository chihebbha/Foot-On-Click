var express = require('express');
var router = express.Router();
var request=require('request');

var mLab = require('mongolab-data-api')('uvxRwGeN6nKy9oQt5hg7yKYLltgGAbyN');

router.get('/:pos',function(req, res, next){

    mLab.insertDocuments({
        database: 'footonclick',
        collectionName: 'reservation',
       documents: {date_match :Date.now(),position:req.params.pos}
    },function(req,res){
        console.log("ajout reservation avec succee ");

    });



});
module.exports = router;