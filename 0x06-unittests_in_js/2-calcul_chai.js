/**
 * - Upgrade the function you created in the previous task (0-calcul.js)
 * - Add a new argument named type at first argument of the function. type can 
 *   be SUM, SUBTRACT, or DIVIDE (string)
 * - When type is SUM, round the two numbers, and add a and b
 * - When type is SUBTRACT, round the two numbers, and subtract b from a
 * - When type is DIVIDE, round the two numbers, and divide a with b - if the
 *   rounded value of b is equal to 0, return the string Error
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type. Supported types: SUM, SUBTRACT, DIVIDE');
  }
}

module.exports = calculateNumber;
