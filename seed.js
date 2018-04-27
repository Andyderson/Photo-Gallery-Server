const request = require('request');
const rp = require('request-promise');
const mongodb = require('./database/index.js');
const data = require('./data.js');
const fs = require('fs');

const insertPhotoData = () => {
    fs.readFile('./data.json', (err, data) => {
        if (err) {
            console.log('readFile error', err);
        } else {
            const inputData = JSON.parse(data);
            console.log('this is data', inputData);
            mongodb.Photo.create(inputData);
        }
    })
};

insertPhotoData(data);