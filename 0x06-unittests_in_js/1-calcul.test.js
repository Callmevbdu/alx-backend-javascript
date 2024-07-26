const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers for type SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the subtraction result of rounded numbers for type SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the division result of rounded numbers for type DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when dividing by 0 for type DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for an invalid type', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1.4, 4.5), /Invalid type/);
  });
});
