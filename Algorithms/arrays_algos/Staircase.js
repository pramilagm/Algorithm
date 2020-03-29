function staircase(n) {
  let printStaircase = "";
  for (var i = 1; i <= n; i++) {
    if (i < n) {
      printStaircase += " ".repeat(n - i) + "#".repeat(i) + "\n";
    } else {
      printStaircase += "#".repeat(i) + "\n";
    }
  }
  if (printStaircase.length > 1) {
    console.log(printStaircase);
  }
}
staircase(5);
