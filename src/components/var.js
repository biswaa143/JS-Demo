function example() {
    var x = 1;
    let y = 2;
    const z = 3;
  
    if (true) {
      var x = 10; // Reassigns the value of 'x' (function-scoped)
      let y = 20; // Creates a new block-scoped 'y'
      const z = 30; // Creates a new block-scoped 'z'
  
      console.log(x); // Output: 10
      console.log(y); // Output: 20
      console.log(z); // Output: 30
    }
  h
    console.log(x); // Output: 10 (accessible outside the block)
    console.log(y); // Output: 2 (not affected by the block)
    console.log(z); // Output: 3 (not affected by the block)
  }
  
  example();
  