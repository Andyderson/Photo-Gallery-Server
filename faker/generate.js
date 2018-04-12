const faker = require('faker');
const fs = require('fs');

faker.locale = 'en_US';

const results = [];

for (var i = 0; i < 250; i++) {
  faker.seed(i);
  const product = {};
  product.id = i; // Generate ID
  product.rating = Math.random() * 5; // Generate Rating
  product.name = faker.commerce.productName(); // Generate Name
//   product.price = faker.commerce.price(); // Generate Price
//   product.category = faker.commerce.product(); // Generate Category
  product.imageUrl = faker.image.imageUrl(); // Generate Image
  results.push(product);
}

fs.writeFile('./data.json', JSON.stringify(results));
