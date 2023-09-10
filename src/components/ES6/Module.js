// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from "./math.js";
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
