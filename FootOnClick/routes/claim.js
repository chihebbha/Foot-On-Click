var express = require('express');
var router = express.Router();
var request=require('request');

var mLab = require('mongolab-data-api')('uvxRwGeN6nKy9oQt5hg7yKYLltgGAbyN');

router.get('/',function(req, res, next){

    mLab.insertDocuments({
        database: 'footonclick',
        collectionName: 'reclamation',
       documents: {objet:"sqd"}
    },function(req,res){
        console.log("ajput reclammation avec succee ");

    });



});
module.exports = router;