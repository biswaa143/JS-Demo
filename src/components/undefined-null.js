let a; // variable declared but not assigned a value, so it is undefined
console.log(a); // undefined

function foo() {}
console.log(foo()); // undefined (function without explicit return statement)

let obj = null; // variable assigned the null value intentionally
console.log(obj); // null
