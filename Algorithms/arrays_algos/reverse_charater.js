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