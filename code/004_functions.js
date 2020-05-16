// Function Implementations

// Conventional Function
function sum(a, b) {
  return a + b;
}

// Function in a variable
const sum = function (a, b) {
  console.log('here');
  return a + b;
};

// Arrow Functions
const sum = (a, b) => {
  return a + b;
};

// Arrow function without return keyword
const sum = (a, b) => a + b;

// Function with a default param
const sum = (a, b = 0) => a + b;

// Using Function constructor
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 4)); // 5
