/**
 * Created by hamdi_chebbi on 12/03/2016.
 */

var mongoose= require('../config/db.js') ;
var timelineSchema = mongoose.Schema({

}) ;

var timelineSchema = mongoose.Schema({

            date_game: date,
            description:String
})
// le modéle relatif au Schéma -----> lui passer le Schéma
module.exports=mongoose.model('timeline',timelineSchema) ;
