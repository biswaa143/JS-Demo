asyncOperation1(function (error, result1) {
    if (error) {
      console.error(error);
    } else {
      asyncOperation2(result1, function (error, result2) {
        if (error) {
          console.error(error);
        } else {
          asyncOperation3(result2, function (error, result3) {
            if (error) {
              console.error(error);
            } else {
              // ... more nested callbacks ...
            }
          });
        }
      });
    }
  });
  