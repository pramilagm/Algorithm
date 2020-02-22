//to find the matching pair of number that equals to the sum of given number while in ordered list

function pairwithSum(arr, sum) {
  low = 0;
  high = arr.length - 1;
  while (low < high) {
    if (arr[low] + arr[high] == sum) {
      return true;
    }
    low += 1;
  }
  return false;
}
var arr = [2, 5, 4, 8];
var sum = 12;
console.log(pairwithSum(arr, sum));
pairwithSum(arr, sum);

console.log("hello");
//This is O(1)time space complexity because it is scanning one at a time rather scanning the whole list of element
