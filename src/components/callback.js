function fetchData(callback) {
    setTimeout(() => {
      const data = "Some data";
      callback(null, data); // Pass null as the error and data as the result
    }, 1000);
  }
  
  fetchData((error, result) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Result:", result);
    }
  });
  