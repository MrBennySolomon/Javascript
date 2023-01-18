function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
  }
 // getSum([1,2,3][5,66,23]);

//   What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// ?line 10 we need 2 arr arguments
// ?line 4 assignment to const variable
// 2. Which debug method did you use to find the bug?
// ?debug add on
// ?JS Repl
// 3. Explain the bug in your own words.
// ?we need to send two arr arguments
// ?line 4 assignment to const variable
// 4. Fix the code and submit it all.
// ?let sum = 0;
console.log(getSum([1,2,3], [5,66,23]));