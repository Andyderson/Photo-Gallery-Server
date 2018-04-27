const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let dockerUrl = 'mongodb://database/Shamazon';

// mongoose.connect('mongodb://localhost/Shamazon');
// mongoose.connect('mongodb://172.17.0.2/16/Shamazon');
mongoose.connect(dockerUrl);

let db = mongoose.connection;

let photoSchema = mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    name: String,
    imageUrls: Array,
    description: String,
    rating: Number,
    price: String,
    category: String,
  });
  
let Photo = mongoose.model('Product', photoSchema);
  
module.exports.Photo = Photo;
module.exports.db = db;