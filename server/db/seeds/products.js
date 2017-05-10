const uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  return knex('products').del()
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        _id: id,
        name: 'strap 1',
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
  });
};
