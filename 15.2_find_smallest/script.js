function findSmallest(a, b, c){
    if (a < b && a < c){
      return a;
    } else if (b < a && b < c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(findSmallest(52,66, 2));

//   What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// ? line 10 wrong function name
// ? line 2 check only a and b, if false does not check c
// ? line 4 check only a and c, if false does not check b
// 2. Which debug method did you use to find the bug?
// ?debugger add on
// 3. Explain the bug in your own words.
// ? line 10 wrong function name
// ? line 2 check only a and b, if false does not check c
// ? line 4 check only a and c, if false does not check b
// 4. Fix the code and submit it all.
function findSmallest(a, b, c){
  if (a < b && a < c){
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(findSmallest(52,66, 2));