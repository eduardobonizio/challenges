console.time("Fibonacci recursive");
const fibonacci = (n) => {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.timeEnd("Fibonacci recursive");

// https://www.youtube.com/watch?v=mWjAfxnUTdo
console.time("Fibonacci recursive with object");
const fibonacciObj = {
  fibonacciNumbers: {},
  fibonacci: (n) => {
    if (n < 2) return n;

    if (!fibonacciObj.fibonacciNumbers[n - 2]) {
      fibonacciObj.fibonacciNumbers[n - 2] = fibonacciObj.fibonacci(n - 2);
    }

    if (!fibonacciObj.fibonacciNumbers[n - 1]) {
      fibonacciObj.fibonacciNumbers[n - 1] = fibonacciObj.fibonacci(n - 1);
    }

    return (
      fibonacciObj.fibonacciNumbers[n - 1] +
      fibonacciObj.fibonacciNumbers[n - 2]
    );
  },
};
console.timeEnd("Fibonacci");
