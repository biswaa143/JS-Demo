function add(x) {
  return function (y) {
    return x + y;
  };
}

// Currying the add function
const add5 = add(5);

// Using the curried function
console.log(add5(2)); // Output: 7
console.log(add5(10)); // Output: 15
