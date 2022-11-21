// let counter = 0;
// function inception() {
//   console.log(counter);
//   if (counter > 3) {
//     return "done";
//   }
//   counter++;
//   return inception();
// }
// console.log(inception());

// factorial

// function factorial(num) {
//   if (num === 2) {
//     return 2;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(5));

// function fibonacci(n) {
//   let n1 = 0;
//   let n2 = 1;
//   //let num  = 20;
//   let next = n1 + n2;
//   console.log("fibonacci series:");
//   console.log(n1);
//   console.log(n2);
//   for (let i = 0; i <= n; i++) {
//     console.log(next);
//     n1 = n2;
//     n2 = next;
//     next = n1 + n2;
//   }
// }
//fibonacci(20);

// function recursiveFactorial(n) {
//   if (n < 2) {
//     return n;
//   }
//   return recursiveFactorial(n - 1) + recursiveFactorial(n - 2);
// }

// console.log(recursiveFactorial(8));

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]); // this means keep adding the last 2 previo+use numbers
  }
  return arr[n];
}
console.log(fibonacciIterative(8));
