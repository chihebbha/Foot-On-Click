/**
 * Created by raja on 19/04/2016.
 */

var mongoose=require('../config/db');
var Schema=mongoose.Schema;
var BetSchema=mongoose.Schema({

    mise:Number,
    cote:Number,
    user : string,
    match : [{
    idMatch: string,
    choix: number
}]

});
module.exports=mongoose.model('bet',BetSchema);