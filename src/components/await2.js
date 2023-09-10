async function fun1() {
  console.log("a");
  console.log("b");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log("e");
}

fun1();
