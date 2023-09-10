const sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 3)); // Output: 5

// Example using anonymous function as a callback
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num * 2);
});

// Example using anonymous function as an IIFE
(function () {
  console.log("This is an immediately invoked function expression (IIFE).");
})();
