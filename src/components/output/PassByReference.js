function modifyArray(array) {
  array.push(4); // Modifying the original array
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4] (original array is modified)
