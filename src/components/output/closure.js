function outerFunction() {
  var outerVariable = "Hello";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closureFunc = outerFunction();
closureFunc(); // Output: Hello
