function addNumbers(a, b) {
  console.log(a + b);
}

function multiplyNumbers(a, b) {
  console.log(a * b);
}

const numbers = [5, 3];
addNumbers.apply(null, numbers); // Output: 8
multiplyNumbers.apply(null, numbers); //Output: 15
