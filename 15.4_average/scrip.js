function calcAverage (arr){
    var sum ;
    for ( var i = 0 ; i < arr .length; i ++ ){
      sum += arr [ i ];
    } 
    return sum ;
  }
  calcAverage ([ 85 , 90 , 92 ]);

//   What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// ?line 4
// ?line 6
// 2. Which debug method did you use to find the bug?
// ?debugger add on
// 3. Explain the bug in your own words.
// ?line 4 try to make number assignment to undefined variable
// ?line 6 return sum and not average
// 4. Fix the code and submit it all.
function calcAverageCorrect (arr){
  var sum = 0;
  for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
  } 
  return sum / arr.length ;
}
console.log(calcAverageCorrect ([ 85 , 90 , 92 ]));