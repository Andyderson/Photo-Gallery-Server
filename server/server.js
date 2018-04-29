const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rp = require('request-promise');
const axios = require('axios');
const mongodb = require('../database/index.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(1337, () => { console.log('Serving up pictures on port 1337!') });

app.get('/products/:id/photos', (req, res) => {
  // console.log('Express Get Success', res.data);
    const id = Number(req.params.id);
    console.log('this is id', id);
    mongodb.Photo.findOne({id: id})
    .then(photos => res.json(photos));
  })