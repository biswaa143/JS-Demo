const personPrototype = {
  sayHello: function () {
    console.log("Hello!");
  },
};

const person = Object.create(personPrototype);
person.name = "John";
person.age = 25;
console.log(person);