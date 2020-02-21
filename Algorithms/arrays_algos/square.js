  function squareArrayInPlace(intArray) {

      intArray.forEach((int, index) => {
          intArray[index] *= int;
      });


  }
  var square = [2, 4, 6]
  console.log(squareArrayInPlace(square))