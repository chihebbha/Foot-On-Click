var mongoose=require('../config/db');
var Schema=mongoose.Schema;
var ClaimSchema=mongoose.Schema({
    message : string
});
module.exports=mongoose.model('reclamation',ClaimSchema);