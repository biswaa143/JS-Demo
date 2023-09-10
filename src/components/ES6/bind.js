function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: "Alice" };
const greetPerson = greet.bind(person);
greetPerson(); // Output: Hello, Alice!
