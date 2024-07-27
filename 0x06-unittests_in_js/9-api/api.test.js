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

  it('should handle errors gracefully', (done) => {
    request.get(`${apiUrl}/error`, (error, response, body) => {
      expect(body).to.include('Error');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    request.get(`${apiUrl}/cart/123`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return payment methods for a valid cart ID', (done) => {
    request.get(`${apiUrl}/cart/123`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should handle large cart IDs', (done) => {
    request.get(`${apiUrl}/cart/999999999999`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
