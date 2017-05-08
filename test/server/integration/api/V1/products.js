const chai = require('chai');
const should =  chai.should();
const chaiHttp = require('chai-http');
const passportStub = require('passport-stub');
const uuid = require('uuid/v4');


require('../../testHelper');
const server = require('../../../../../server/app');
const knex = require('../../../../../server/db/connection');

chai.use(chaiHttp);
passportStub.install(server);

describe('product API V1 routes', () => {
  describe('GET /products', () => {
    it('should return a list of products', (done) => {
      chai.request(server)
      .get('/api/v1/products')
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        res.body.meta.should.exist;
        res.body.content.length.should.be.above(0);
        done();
      });
    });
  });

  describe('GET /products/:id', () => {
    it('should find a product for a given id', (done) => {
      chai.request(server)
      .get('/api/v1/products')
      .end((err, res) => {
        should.not.exist(err);
        const id = res.body.content[0].id;
        chai.request(server)
        .get(`/api/v1/products/${id}`)
        .end((err, res) => {
          should.not.exist(err);
          res.redirects.length.should.eql(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          res.body.content.id.should.eql(id);
          done();
        });
      })
    });

    it('should return a 404 for id\'s that don\'t exist', (done) => {
      const id = uuid();
      chai.request(server)
      .get(`/api/v1/products/${id}`)
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(404);
        res.type.should.eql('application/json');
        res.body.message.should.eql('Not Found');
        done();
      });
    });

    it('should return a 404 for malformed id\'s', (done) => {
      chai.request(server)
      .get(`/api/v1/products/a-bad-id`)
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(404);
        res.type.should.eql('application/json');
        res.body.message.should.eql('Not Found');
        done();
      });
    });
  });

  describe('POST /products', () => {
    it('should create a new product', (done) => {
      chai.request(server)
      .post('/api/v1/products')
      .send({
        name: "post test",
        price: 125.00
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        res.body.meta.should.exist;
        res.body.content.name.should.eql('post test');
        res.body.content.price.should.eql('125.00');
        done();
      });
    });

    it('should not create a product with invalid data', (done) => {
      chai.request(server)
      .post('/api/v1/products')
      .send({
        name: 'sakdljasfj',
        type: 'not a type we support',
        price: '50 dollars'
      })
      .end((err, res) => {
        res.redirects.length.should.eql(0);
        res.status.should.eql(500);
        res.type.should.eql('application/json');
        done();
      });
    });
  });

  describe('PUT /products/:id', () => {
    it('should update a product with new data', (done) => {
      chai.request(server)
      .get('/api/v1/products')
      .end((err, res) => {
        var product = res.body.content[0];
        product.name = "a new name";
        product.type = "MERCH";
        product.price = '5.11';
        product.available = true;
        chai.request(server)
        .put(`/api/v1/products/${product.id}`)
        .send(product)
        .end((err, res) => {
          should.not.exist(err);
          res.redirects.length.should.eql(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          res.body.meta.should.exist;
          res.body.content.id.should.eql(product.id);
          res.body.content.name.should.eql(product.name);
          res.body.content.type.should.eql(product.type);
          res.body.content.price.should.eql(product.price);
          res.body.content.available.should.eql(product.available);
          res.body.content.updated_at.should.not.eql(product.updated_at);
          done();
        });
      })
    });

    it('should not update a product with invalid data', (done) => {
      chai.request(server)
      .get('/api/v1/products')
      .end((err, res) => {
        var product = res.body.content[0];
        product.name = "a new name";
        product.type = "crap";
        product.price = 'banana';
        product.available = 7;
        chai.request(server)
        .put(`/api/v1/products/${product.id}`)
        .send(product)
        .end((err, res) => {
          should.exist(err);
          res.redirects.length.should.eql(0);
          res.status.should.eql(500);
          res.type.should.eql('application/json');
          done();
        });
      })
    });
  });

  describe('DELETE /api/v1/products/:id', () => {
    it('should successfully delete a product', (done) => {
      chai.request(server)
      .get('/api/v1/products')
      .end((err, res) => {
        var product = res.body.content[0];
        chai.request(server)
        .delete(`/api/v1/products/${product.id}`)
        .end((err, res) => {
          should.not.exist(err);
          res.redirects.length.should.eql(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.content.message.should.eql('Delete Successful');
          done();
        });
      });
    });

    it('should 404 for id\'s that don\'t exist', (done) => {
      chai.request(server)
      .delete('/api/v1/products/nonsense')
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(404);
        res.type.should.eql('application/json');
        res.body.message.should.eql('Not Found');
        done();
      });
    });
  });
});
