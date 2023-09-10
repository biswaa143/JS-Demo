var counter = (function() {
  var count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(counter.getCount()); // Output: 0

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2

counter.decrement();
console.log(counter.getCount()); // Output: 1
