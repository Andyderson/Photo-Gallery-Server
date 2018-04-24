const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/Shamazon');

let db = mongoose.connection;

let photoSchema = mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    name: String,
    imageUrls: Array,
    description: String,
    rating: Number,
  });
  
let Photo = mongoose.model('Product', photoSchema);
  
module.exports.Photo = Photo;
module.exports.db = db;