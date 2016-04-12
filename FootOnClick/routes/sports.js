/**
 * Created by hamdi_chebbi on 11/03/2016.
 */
var express = require('express');
var router = express.Router();
var pinnacle_sports = require('pinnacle-sports');

var client = pinnacle_sports.createClient('HC859570', 'nassira@14');

var options = {
    sportid: 29
};

client.get_fixtures(options, function(error, result){
    console.log(error);
    console.log(result);
});
client.get_fixtures(options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    });


module.exports = router;
