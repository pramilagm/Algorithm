function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// console.log(fibonacci(50));

// Memoization solution
function fib(n, memo = []) {
  if (memo[n] != null) {
    return memo[n];
  }
  var result;
  if (n == 1 || n == 2) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}
console.log(fib(500));
