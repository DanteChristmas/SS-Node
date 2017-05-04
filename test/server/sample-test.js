process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

describe('mocha:chai tests', () => {

  describe('the test runner', () => {
    it('should be able to pass a simple test', (done) => {
      const cat = 'cat';
      cat.should.eql('cat');
      done();
    });
  });
});
