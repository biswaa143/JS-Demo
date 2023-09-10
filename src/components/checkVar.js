const arr = [1, 2, 3];
// const variable = ["Hello"];
const variable = "Hello";

console.log(Array.isArray(arr)); // Output: true
console.log(Array.isArray(variable)); // Output: false

console.log(arr instanceof Array); // Output: true
console.log(variable instanceof Array); // Output: false

console.log(arr.constructor === Array); // Output: true
console.log(variable.constructor === Array); // Output: false
