function* numberGenerator() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

const iterator = numberGenerator();
console.log(iterator.next().value); // Output: 0
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
// and so on...
