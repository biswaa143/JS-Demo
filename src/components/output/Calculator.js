const Calculator = {
    result: 0,
  
    add(value) {
      this.result += value;
      return this; // return the object itself for chaining
    },
  
    subtract(value) {
      this.result -= value;
      return this;
    },
  
    multiply(value) {
      this.result *= value;
      return this;
    },
  
    divide(value) {
      this.result /= value;
      return this;
    },
  
    clear() {
      this.result = 0;
      return this;
    }
  };
  const result = Calculator.add(5).multiply(3).subtract(2).divide(2).clear().add(10).result;
  console.log(result); // Output: 10
    