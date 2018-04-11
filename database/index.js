const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/shamPhotos');

let db = mongoose.connection;

let photoSchema = mongoose.Schema({
    // id: Number,
    id: {type: Number, require: true, unique: true},
    // html_url: String, 
    html_url: {type: String, require: true, unique: true},
    description: String
  });
  
let Photo = mongoose.model('Photo', photoSchema);
  
module.exports.Photo = Photo;

//<<<<<<<<<<<< Example >>>>>>>>>>>>>>>

let photoExample = new Photo ({'id': 1, 'html_url': 'http://lorempixel.com/640/480', 'description': 'This data was generated'});
  photoExample.save((err, photo) => {
      if (err) {
          console.log('MongoDB save error', err);
      } else {
          console.log('MongoDB save success');
      }
  })
