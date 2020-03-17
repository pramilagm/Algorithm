function common_element(arr1, arr2) {
  result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

var array1 = [1, 3, 4, 6, 7, 9];
var array2 = [1, 2, 4, 9, 5, 10, 3];
console.log(common_element(array1, array2));

var commonElementinArray = (arr1, arr2) => {
  p1 = 0;
  p2 = 0;
  arr = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      arr.push(arr1[p1]);
      p1 += 1;
      p2 += 1;
    }
    if (arr1[p1] > arr2[p2]) {
      p2 += 1;
    } else {
      p1 += 1;
    }
  }
  return arr;
};
let arr1 = [1, 6, 8, 5, 9];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(commonElementinArray(arr1, arr2));
