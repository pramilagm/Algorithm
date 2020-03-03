function reverseWord(message) {
  var rev = reverse(message, 0, message.length - 1);
  console.log(rev);
  var firstIndex = 0;
  for (var i = 0; i <= message.length; i++) {
    if ((i = message.length || message[i] === " ")) {
      reverse(message, firstIndex, i - 1);
      firstIndex = i + 1;
    }
  }
  return message.join("");
}

var arr = ["c", "a", "k", "e", " ", "p", "o", "u", "n", "d"];

console.log(reverseWord(arr));

function reverse(arr, firstIndex, lastIndex) {
  while (firstIndex < lastIndex) {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[lastIndex];
    arr[lastIndex] = temp;
    firstIndex++;
    lastIndex--;
  }
  return arr;
}
function hasPalindromePermutation(theString) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
      console.log(unpairedCharacters);
    } else {
      unpairedCharacters.add(char);
      console.log("-------------");
      console.log(unpairedCharacters);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}
console.log(hasPalindromePermutation("racecar"));
//Spread Operator
let old_arr = [1, 2, 3];
let new_arr = [...old_arr, 4, 5];
console.log(new_arr);

let obj = { a: 0, b: { c: 0 } };
obj.a = 1;
obj.b.c = 1;
let copySpread = { ...obj };
let copyOA = Object.assign({}, obj);
console.log(obj);
console.log(copySpread);
console.log(copyOA);

obj = { a: 0, b: { c: 0 } };
let deepClone = JSON.parse(JSON.stringify(obj));
obj.a = 5;
obj.b.c = 5;
console.log(JSON.stringify(obj)); // { a: 5, b: { c: 5}}
console.log(JSON.stringify(deepClone)); // { a: 0, b: { c: 0}}
