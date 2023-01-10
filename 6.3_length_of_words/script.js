function lengthOfStrings (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].length;
  }

  return newArr;
}

console.log(lengthOfStrings(["boo", "doooo", "hoo","ro"]));