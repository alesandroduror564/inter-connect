// main.js

/**
 * This code demonstrates a sophisticated and elaborate JavaScript program
 * that calculates the Fibonacci series up to a given number.
 * It takes advantage of various algorithms to optimize performance.
 * Filename: fibonacci.js
 */

// Function to calculate the Fibonacci series
function fibonacciSeries(n) {
  var fibSeq = [0, 1];

  if (n <= 2) {
    return fibSeq.slice(0, n);
  }

  var fibPrev = 1;
  var fibCurr = 1;

  while (fibSeq.length < n) {
    var fibNext = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = fibNext;
    fibSeq.push(fibNext);
  }

  return fibSeq;
}

// Function to generate a random number from a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Main function that calls all the other functions
function main() {
  var num = generateRandomNumber(10, 20);
  var fibonacciResult = fibonacciSeries(num);
  var factorialResult = factorial(num);

  console.log("Generated Random Number:", num);
  console.log("Fibonacci Series:", fibonacciResult);
  console.log("Factorial of", num, ":", factorialResult);
}

// Execute the main function
main();