function getSumOfEven(arr){
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}

//console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// ?line 2
// 2. Which debug method did you use to find the bug?
// ?debugger add on
// 3. Explain the bug in your own words.
// ?we check sum numbers with index even and not the numbers that are even
// ! index 10 in arr of 10 numbers are not allowed (0-9)
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
function getSumOfEvenCorrect(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
    
  }
  return sum;  
}

console.log(getSumOfEvenCorrect([1,2,3,4,5,6,7,8,9,10]));