const uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  return knex('products').del()
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        name: 'strap 1',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        name: 'strap 2',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        name: 'strap 3',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        name: 'strap 4',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        name: 'strap 5',
        price: 124.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        type: 'MERCH',
        name: 'Gun Sling',
        price: 40.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        type: 'MERCH',
        name: 'Belt',
        price: 35.50
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        type: 'APPAREL',
        name: 'Hat',
        price: 15.00
      })
    );
  })
  .then(function () {
    const id  = uuid();
    return Promise.join(
      knex('products').insert({
        id: id,
        type: 'APPAREL',
        name: 'Shirt',
        price: 20.00
      })
    );
  });
};
