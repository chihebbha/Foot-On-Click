var mongoose=require('../config/db');
var Schema=mongoose.Schema;
var newslleter=mongoose.Schema({
    "email": string
});
module.exports=mongoose.model('newslleter',PostSchema);