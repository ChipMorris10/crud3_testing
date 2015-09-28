var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var Tatum = new Schema({
  movies:String,
  year:Number,
  chickFlick:Boolean
});




mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/tatums');
module.exports = mongoose.model("tatums", Tatum);
