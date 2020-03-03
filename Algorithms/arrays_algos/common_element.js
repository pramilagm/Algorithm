function common_element(arr1, arr2) {
  result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

arr1 = [1, 3, 4, 6, 7, 9];
arr2 = [1, 2, 4, 5, 9, 10];
console.log(common_element(arr1, arr2));
