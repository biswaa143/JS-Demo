function someFunction() {
  console.log("Function execution");

  process.nextTick(() => {
    console.log("Callback execution");
  });

  console.log("Function continues");
}

someFunction();

console.log("Main execution");
