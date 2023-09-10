const obj = {
    name: 'John',
    normalFunc: function() {
      console.log('Normal function:', this.name);
    },
    arrowFunc: () => {
      console.log('Arrow function:', this.name);
    }
  };
  
  const outerFunc = function() {
    console.log('Outer function:', this.name);
  };
  
  const arrowOuterFunc = () => {
    console.log('Arrow outer function:', this.name);
  };
  
  obj.normalFunc();          // Output: Normal function: John
  
  const normalBoundFunc = obj.normalFunc.bind({ name: 'Jane' });
  normalBoundFunc();         // Output: Normal function: Jane
  
  obj.arrowFunc();           // Output: Arrow function: undefined
  
  const arrowBoundFunc = obj.arrowFunc.bind({ name: 'Jane' });
  arrowBoundFunc();          // Output: Arrow function: undefined
  
  outerFunc();               // Output: Outer function: undefined
  
  arrowOuterFunc();          // Output: Arrow outer function: undefined
  