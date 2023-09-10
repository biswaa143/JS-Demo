function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Some data
  })
  .catch((error) => {
    console.log(error);
  });
