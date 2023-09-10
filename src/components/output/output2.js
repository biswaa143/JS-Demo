function delay(milliseconds, callback) {
  setTimeout(callback, milliseconds);
}

function example() {
  delay(6000, () => {
    setTimeout(() => {
      console.log("first");
    }, 10000);
    console.log("second");
  });
}

example();
