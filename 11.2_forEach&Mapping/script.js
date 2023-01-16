// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const doubleValues = [1, 2, 3, 4, 5, 6, 7, 8].map(val => val * 2);
console.log(doubleValues); 
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const onlyEvenValues = arr => {
  let newArr = [];
  arr.forEach(element => {
    if(element % 2 === 0){
      newArr.push(element);
    }
  });
  return newArr;
};
console.log(onlyEvenValues(arr)); 

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
const strArr = ["Hello", "World", "Ho", "Wd"];
const showFirstAndLast = array => {
  let newArr = [];
  array.forEach((element, i) => {
    if(i === 0 || i === array.length - 1) {
      newArr.push(element);
    }
  })
  return newArr;
};
console.log(showFirstAndLast(strArr));
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
const strVowelCount = str => {
  let newObj = {};
  let arr = str.split('');
  arr.forEach((element) => {
    if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
      newObj[element] = typeof newObj[element] === 'number' ? newObj[element] + 1 : 1; 
  }})
  return newObj;
};
console.log(strVowelCount("Benny Solomon"));
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)