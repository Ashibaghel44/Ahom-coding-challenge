// Calculate 10!

function factorial(n) {
    if (n === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  const result = factorial(10);
  console.log(result);