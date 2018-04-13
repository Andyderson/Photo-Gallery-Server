const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/shamPhotos');

let db = mongoose.connection;

let photoSchema = mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    name: String,
    // imageUrl: String,
    imageUrls: Array,
    description: String,
    rating: Number,
  });
  
let Photo = mongoose.model('Photo', photoSchema);
  
module.exports.Photo = Photo;
module.exports.db = db;