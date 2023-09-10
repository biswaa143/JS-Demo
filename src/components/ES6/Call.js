function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = { name: 'Alice' };
  greet.call(person); // Output: Hello, Alice!
  