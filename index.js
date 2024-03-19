// Review: Declare a Function Using a Function Expression
const foo = function() {
    return 'bar';
  }
  
  // Declare a Function Using An Arrow Function
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  
  // Describe Situations Where Arrow Functions Are Used
  // Arrow functions are often used in JavaScript's iterator methods like .map()
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2); 
  // Arrow function passed to map to square each element of the array
  