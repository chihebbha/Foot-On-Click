var mongoose=require('../config/db');
var Schema=mongoose.Schema;
var PostSchema=mongoose.Schema({
    date:String,
    homeTeamName:String,
    awayTeamName:String,
    statut:String,
    goalsHomeTeam:Number,
    goalsAwayTeam:Number

});
module.exports=mongoose.model('match',PostSchema);