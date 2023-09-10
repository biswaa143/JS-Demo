const x = 5;
const y = 10;

const obj = {
  x, // shorthand notation for x: x
  y, // shorthand notation for y: y
  calculateSum() {
    return this.x + this.y;
  },
};

console.log(obj.calculateSum()); // Output: 15
