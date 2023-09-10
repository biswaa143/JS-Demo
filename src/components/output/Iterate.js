const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Using a for...in loop
for (const key in obj) {
  console.log(obj[key]);
}

// Using Object.values()
const values = Object.values(obj);
values.forEach((value) => console.log(value));