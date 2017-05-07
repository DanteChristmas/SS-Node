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
});
