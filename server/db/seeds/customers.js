const uuid = require('uuid/v4');
const faker = require('faker');

exports.seed = function(knex, Promise) {
  var customers = [];
  const cust_size = 500;
  for(let i = 0; i < cust_size; i++) {
    let id = uuid();
    customers.push({
      _id: id,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      company_name: faker.company.companyName(),
      email: faker.internet.email(),
      address_line_1: faker.address.streetAddress(),
      address_line_2: faker.address.secondaryAddress(),
      zip_code: faker.address.zipCode().split('-')[0]
    });
  }

  return knex('customers').del()
  .then(() => {
    const id = uuid();
    return Promise.join(
      knex('customers').insert({
        _id: id,
        first_name: 'bob',
        last_name: 'dole',
        email: 'bob_dole@whitehouse.gov',
        address_line_1: 'some location',
        address_line_2: '321 some street',
        zip_code: 12345,
        notes: "some notes and stuff"
      })
    );
  })
  .then(() => {
    const id = uuid();
    return Promise.join(
      knex('customers').insert({
        _id: id,
        first_name: 'first',
        last_name: 'last',
        email: 'email@email.com',
        address_line_1: '111 a street',
        zip_code: 22222
      })
    );
  })
  .then(() => {
    const id = uuid();
    return Promise.join(
      knex('customers').insert({
        _id: id,
        first_name: 'asdfd',
        last_name: 'asdfasd',
        email: 'asdf@sdfa.com',
        address_line_1: '123 adfasf',
        zip_code: 66548
      })
    );
  })
  .then(() => {
    const id = uuid();
    return Promise.join(
      knex('customers').insert({
        _id: id,
        first_name: 'iadhv',
        last_name: 'lfdaskf',
        email: 'lasmic@email.com'
      })
    );
  })
  .then(() => {
    const id = uuid();
    return Promise.join(
      knex('customers').insert({
        _id: id,
        first_name: 'ozxcvijcvxz',
        last_name: 'lewmrm',
        email: 'zxcvzio@email.com'
      })
    );
  })
  .then(() => {
    const id = uuid();
    return Promise.join(
      knex('customers').insert({
        _id: id,
        first_name: 'zxkjvz',
        last_name: 'ewrfs',
        email: 'zvdee@email.com'
      })
    );
  })
  .then(() => {
    const id = uuid();
    return Promise.join(
      knex('customers').insert({
        _id: id,
        first_name: 'cccwer',
        last_name: 'zxvrea',
        email: 'weomem@email.com'
      })
    );
  }).then(() => {
    return Promise.join(
      knex('customers').insert(customers)
    );
  });
};
