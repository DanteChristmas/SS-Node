const uuid = require('uuid/v4');
const faker = require('faker');

exports.seed = function(knex, Promise) {
  var products = [];
  const product_size = 500;
  for(let i = 0; i < product_size; i++) {
    let id = uuid();
    products.push({
      _id: id,
      type: 'STRAP',
      available: Math.random() >= 0.5,
      name: `Vintage Strap: ${i}`,
      price: faker.finance.amount()
    });
  }

  return knex('products').del()
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        name: 'strap 1',
        available: true,
        price: '124.50'
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        name: 'strap 2',
        available: true,
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        name: 'strap 3',
        price: 120.00
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        name: 'strap 3',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        name: 'strap 4',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        name: 'strap 5',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        type: 'MERCH',
        name: 'Gun Sling',
        available: true,
        price: 40.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        type: 'MERCH',
        name: 'Belt',
        available: true,
        price: 35.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        type: 'MERCH',
        name: 'Sandwich',
        price: 8.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        type: 'APPAREL',
        available: true,
        name: 'Hat',
        price: 15.00
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        type: 'APPAREL',
        name: 'Pants',
        price: 35.00
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        type: 'APPAREL',
        available: true,
        name: 'Shirt',
        price: 20.00
      })
    );
  }).then(() => {
    return Promise.join(
      knex('products').insert(products)
    );
  });
};
