const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rp = require('request-promise');
const axios = require('axios');
const mongodb = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(1337, () => { console.log('Serving up pictures on port 1337!') });

app.get('/photos', (req, res) => {
    console.log('Express Get Success', res.data);
    mongodb.Photo.find()
    // .limit(4)
    // .sort('title')
    .then(photos => res.send(photos));
  })