function countOccurrences (str, char){
  let counter = 0 ;
  for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
      counter = counter + 1 ;
    }
  }
  return counter ;
}

console.log(countOccurrences ( "ini mini miny moe" , "n" ));

//   What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// ?line 5
// 2. Which debug method did you use to find the bug?
//? debugger vscode add on
// 3. Explain the bug in your own words.
// ?line 5 we are increacing counter, but not assignning that to counter itself
// 4. Fix the code and submit it all.