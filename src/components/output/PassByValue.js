function modifyValue(value) {
  value = 42; // Modifying the local copy of 'value'
}

let num = 10;
modifyValue(num);
console.log(num); // Output: 10 (original value is unchanged)
