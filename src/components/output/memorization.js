function memoize(func) {
  const cache = {}; // Cache object to store memoized results

  return function (...args) {
    const key = JSON.stringify(args); // Generate a unique key based on function arguments

    if (cache[key]) {
      return cache[key]; // Return memoized result if it exists
    }

    const result = func.apply(this, args); // Invoke the original function
    cache[key] = result; // Cache the result for future use

    return result;
  };
}

// Example function to be memoized
function expensiveOperation(n) {
  console.log("Performing expensive operation...");
  return n * 2;
}

const memoizedOperation = memoize(expensiveOperation);

console.log(memoizedOperation(5)); // Output: Performing expensive operation... 10
console.log(memoizedOperation(5)); // Output: 10 (result is retrieved from cache)
console.log(memoizedOperation(8)); // Output: Performing expensive operation... 16
console.log(memoizedOperation(8)); // Output: 16 (result is retrieved from cache)
