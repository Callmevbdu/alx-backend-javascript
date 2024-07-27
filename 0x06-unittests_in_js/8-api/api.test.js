const request = require('request');
const { expect } = require('chai');

const apiUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the expected message', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

