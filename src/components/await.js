function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  await delay(6000);
  setTimeout(() => {
    console.log("first");
  }, 10000);
  console.log("second");
}

main();
