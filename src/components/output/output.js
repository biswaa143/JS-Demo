const delay = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

async function example() {
  await delay(6000);
  setTimeout(() => {
    console.log("first");
  }, 10000);
  console.log("second");
}

example();
