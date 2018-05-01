const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dockerUrl = 'mongodb://database/Shamazon';

mongoose.connect('mongodb://localhost/Shamazon');
// mongoose.connect(dockerUrl);

const db = mongoose.connection;

const photoSchema = mongoose.Schema({
  id: { type: Number, require: true, unique: true },
  name: String,
  imageUrls: Array,
  description: String,
  rating: Number,
  price: String,
  category: String,
});

const Photo = mongoose.model('Product', photoSchema);

module.exports.Photo = Photo;
module.exports.db = db;
