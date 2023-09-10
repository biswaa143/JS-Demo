setImmediate(() => {
  console.log("first");
},2000);

setTimeout(() => {
  console.log("second");
},1000);

console.log("third");
