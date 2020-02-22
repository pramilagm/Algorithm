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

function fib_bootom_up(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  var bottom_up = bottom_up[n + 1];
  bottom_up[1] = 1;
  bottom_up[2] = 1;
  for (var i = 3; i < n; i++) {
    bottom_up[i] = bottom_up[i - 1] + bottom_up[i + 1];
  }
  return bottom_up[i];
}
console.log(fib_bootom_up(5));
