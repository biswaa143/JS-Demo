function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Some data";
        resolve(data); // Resolve the promise with the data
      }, 1000);
    });
  }

  fetchData()
    .then(result => {
      console.log("Result:", result);
    })
    .catch(error => {
      console.error("Error:", error);
    });

