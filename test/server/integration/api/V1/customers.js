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

describe('customer API V1 routes', () => {
  describe('GET /customers', () => {
    it('should return a list of customers', (done) => {
      chai.request(server)
      .get('/api/v1/customers')
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

  describe('GET /customers/:id', () => {
    it('should find a customer for a given id', (done) => {
      chai.request(server)
      .get('/api/v1/customers')
      .end((err, res) => {
        should.not.exist(err);
        const id = res.body.content[0]._id;
        chai.request(server)
        .get(`/api/v1/customers/${id}`)
        .end((err, res) => {
          should.not.exist(err);
          res.redirects.length.should.eql(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          res.body.content._id.should.eql(id);
          done();
        });
      })
    });

    it('should return a 404 for id\'s that don\'t exist', (done) => {
      const id = uuid();
      chai.request(server)
      .get(`/api/v1/customers/${id}`)
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

  describe('POST /customers', () => {
    it('should create a new customer', (done) => {
      chai.request(server)
      .post('/api/v1/customers')
      .send({
        first_name: "andy",
        last_name: "bernard",
        company_name: "dundermifflin",
        email: "abcornel@gmail.com",
        address_line_1: "DunderMifflin Paper Co",
        address_line_2: "239 Maple Street",
        zip_code: 17834,
        notes: "anger issues"
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        res.body.meta.should.exist;
        res.body.content.first_name.should.eql('andy');
        res.body.content.last_name.should.eql('bernard');
        res.body.content.company_name.should.eql('dundermifflin');
        res.body.content.email.should.eql('abcornel@gmail.com');
        res.body.content.address_line_1.should.eql('DunderMifflin Paper Co');
        res.body.content.address_line_2.should.eql('239 Maple Street');
        res.body.content.zip_code.should.eql(17834);
        res.body.content.notes.should.eql("anger issues");
        done();
      });
    });

    it('should not create a customer with invalid data', (done) => {
      chai.request(server)
      .post('/api/v1/customers')
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

  describe('PUT /customers/:id', () => {
    it('should update a customer with new data', (done) => {
      chai.request(server)
      .get('/api/v1/customers')
      .end((err, res) => {
        var customer = res.body.content[0];
        customer.first_name = "andy";
        customer.last_name = "bernard";
        customer.company_name = 'dundermifflin';
        customer.email = 'abcornel@gmail.com';
        customer.address_line_1 = 'DunderMifflin Paper Co';
        customer.address_line_2 = '239 Maple Street';
        customer.zip_code = 17834;
        customer.notes = "anger issues";

        chai.request(server)
        .put(`/api/v1/customers/${customer._id}`)
        .send(customer)
        .end((err, res) => {
          should.not.exist(err);
          res.redirects.length.should.eql(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          res.body.meta.should.exist;
          res.body.content.first_name.should.eql('andy');
          res.body.content.last_name.should.eql('bernard');
          res.body.content.company_name.should.eql('dundermifflin');
          res.body.content.email.should.eql('abcornel@gmail.com');
          res.body.content.address_line_1.should.eql('DunderMifflin Paper Co');
          res.body.content.address_line_2.should.eql('239 Maple Street');
          res.body.content.zip_code.should.eql(17834);
          res.body.content.notes.should.eql("anger issues");
          res.body.content.updated_at.should.not.eql(customer.updated_at);
          done();
        });
      })
    });

    it('should not update a customer with invalid data', (done) => {
      chai.request(server)
      .get('/api/v1/customers')
      .end((err, res) => {
        var customer = res.body.content[0];
        customer.name = "a new name";
        customer.type = "crap";
        customer.price = 'banana';
        customer.available = 7;
        chai.request(server)
        .put(`/api/v1/customers/${customer._id}`)
        .send(customer)
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

  describe('DELETE /api/v1/customers/:id', () => {
    it('should successfully delete a customer', (done) => {
      chai.request(server)
      .get('/api/v1/customers')
      .end((err, res) => {
        var customer = res.body.content[0];
        chai.request(server)
        .delete(`/api/v1/customers/${customer._id}`)
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
      .delete('/api/v1/customers/nonsense')
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
