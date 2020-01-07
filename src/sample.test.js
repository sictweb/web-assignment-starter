/**
 * Here are the tests for our sample.js file.
 * See https://jestjs.io/docs/en/getting-started
 * for more details on how to write tests.
 */
const { add } = require('./sample');

describe('add tests', function() {
  test('adding two numbers', function() {
    let a = 1;
    let b = 2;
    expect(add(a, b)).toBe(a + b);
  });

  test('non-number args should throw', function() {
    // Wrap our call in a function so we can pass to the test
    function shouldThrow() {
      add('1', 1);
    }

    expect(shouldThrow).toThrow();
  });
});
