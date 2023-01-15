function lengthOfStrings (arr) {

  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr[i] = arr[i++].length;
  }

  // for (let i = 0; i < arr.length; i++) {
  //     newArr[i] = arr[i].length;
  // }

  return newArr;
}

console.log(lengthOfStrings(["boo", "doooo", "hoo","ro"]));

//2 - its better with for loop.