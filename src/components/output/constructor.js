function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log("Hello!");
  };
}

const person = new Person("John", 25);

console.log(person.name); // "John"
console.log(person.age);  // 25
person.sayHello();        // "Hello!"