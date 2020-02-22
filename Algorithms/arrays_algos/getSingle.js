// function geSingle(arr, n) {
//   var ones = 0;
//   var twos = 0;
//   var common_bit_mask;

//   for (var i = 0; i < n; i++) {
//     /*"one & arr[i]" gives the bits that are there in
//             both 'ones' and new element from arr[]. We
//             add these bits to 'twos' using bitwise OR*/
//     twos = twos | (ones & arr[i]);

//     /*"one & arr[i]" gives the bits that are
//             there in both 'ones' and new element from arr[].
//             We add these bits to 'twos' using bitwise OR*/
//     ones = ones ^ arr[i];

//     /* The common bits are those bits which appear third time
//             So these bits should not be there in both 'ones' and 'twos'.
//             common_bit_mask contains all these bits as 0, so that the bits can
//             be removed from 'ones' and 'twos'*/
//     common_bit_mask = ~(ones & twos);

//     /*Remove common bits (the bits that appear third time) from 'ones'*/
//     ones &= common_bit_mask;

//     /*Remove common bits (the bits that appear third time) from 'twos'*/
//     twos &= common_bit_mask;
//   }
//   return ones;
// }
var arr = [1, 2, 1, 3, 3];
var n = arr.length;
// console.log(geSingle(arr, n));
function getOnevalue(arr) {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
    console.log(result);
  }
  return result;
}
console.log(getOnevalue(arr));
