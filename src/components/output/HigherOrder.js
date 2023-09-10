function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10
console.log(multiplyByTwo(8)); // Output: 16



function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function double(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}

const addOneAndDouble = compose(double, addOne);
console.log(addOneAndDouble(3)); // Output: 8 (3 + 1 = 4, 4 * 2 = 8)
