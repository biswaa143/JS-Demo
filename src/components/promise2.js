let a = new Promise((resolve, reject) => {
  const data = "";
  // resolve(data);
    reject({ mssg: "Something went wrong" });
  });
  a.then((resolve) => {
    console.log(resolve);
  }).catch((error) => {
    console.log(error.mssg);
  });