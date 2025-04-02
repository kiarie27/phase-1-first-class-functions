// Function that divides two numbers
const divide = function(a, b) {
    return a / b;
  };

  // Arrow function that squares a number
  const square = x => x * x;

  // Arrow function that adds two numbers
  const add = (a, b) => a + b;

  // Function that receives a callback and calls it
  function receivesAFunction(callback) {
    callback();
  }

  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      return "I'm a named function";
    };
  }

  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      return "I'm an anonymous function";
    };
  }

  // Export everything for testing
  module.exports = {
    divide,
    square,
    add,
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };