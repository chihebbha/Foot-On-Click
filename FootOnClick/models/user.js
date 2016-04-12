/**
 * Created by hamdi_chebbi on 12/03/2016.
 */
var mongoose= require('../config/db.js') ;
var refereeSchema = mongoose.Schema({

}) ;

var referreSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    age: Number,
    role: String,

    note: Number,
    favorite_teams: String,
    hometown: String,
    picture: String
})
// le modéle relatif au Schéma -----> lui passer le Schéma
module.exports=mongoose.model('user',refereeSchema) ;
