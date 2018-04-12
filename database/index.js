const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/shamPhotos');

let db = mongoose.connection;

let photoSchema = mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    name: String,
    // html_url: {type: String, require: true, unique: true},
    description: String,
    rating: Number,
    imageUrl: String, 
  });
  
let Photo = mongoose.model('Photo', photoSchema);
  
module.exports.Photo = Photo;
module.exports.db = db;