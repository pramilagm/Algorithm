function matrixElementsSum(matrix) {
  var total = 0;
  for (var i = 0; i < matrix[0].length; i++) {
    console.log(i);
    console.log("---------------");
    console.log(matrix[i]);
    console.log("?????");
    for (var j = 0; j < matrix.length; j++) {
      console.log("|||||||||||||||||");

      console.log(matrix[j]);
      console.log(matrix[i]);
      console.log("//////////////");
      console.log(matrix[j][i]);
      if (matrix[j][i] === 0) break;
      else {
        total += matrix[j][i];
      }
    }
  }
  return total;
}
matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
];

console.log(matrixElementsSum(matrix));
// for(var r=0,j=0;j<matrix[0].length;j++){
//     for(var i=0;i<matrix.length;i++){
//       if(matrix[i][j]===0) break
//       else r+=matrix[i][j]
//     }
// }
// return r
