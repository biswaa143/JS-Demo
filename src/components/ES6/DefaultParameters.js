function greet(name = 'Anonymous') {
    console.log(`Hello, ${name}!`);
  }
  
  greet('Alice'); // Output: Hello, Alice!
  greet(); // Output: Hello, Anonymous!
  