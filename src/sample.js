/**
 * This is a sample JavaScript file just to show
 * how to write a function and run a test.  See
 * sample.test.js for the tests.
 */

// Define your function: add two numbers
function add(a, b) {
  if (typeof a !== 'number') {
    throw new TypeError('expected a number');
  }

  if (typeof b !== 'number') {
    throw new TypeError('expected a number');
  }

  return a + b;
}

// Expose your function for unit tests (either CommonJS or ES Modules)
exports.add = add;
