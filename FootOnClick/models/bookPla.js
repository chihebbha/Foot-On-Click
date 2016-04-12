var mongoose=require('../config/db');
var Schema=mongoose.Schema;
var bookPASchema=mongoose.Schema({
    position:String,
    date_match:String
});
module.exports=mongoose.model('reservation',PostSchema);