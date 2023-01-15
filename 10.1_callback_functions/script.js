// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
const isString = (string, callback) => {
  if (typeof string === 'string') {
    return callback (string);
  }
}

function print(string) {
  return string;
}

function dashes (str) {
  return str.split(' ').join('-');
}

console.log(isString("123", print));
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
const firstWordUpperCase = (string, callback) => {
  let tempStr = "";
  let arr = string.split(' ');

  arr[0] = arr[0].toUpperCase();
  tempStr = arr.join(' ');

  return callback (tempStr);
}
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
console.log(firstWordUpperCase("aaa bbb ccc ddd", dashes));
// 4. Create your own function that will receive from one of its
// arguments a callback function.
const polimorphism = (funcArr) => {
  for (const func of funcArr) {
    func();
  }
}

polimorphism([() => console.log("Hello-1"),() => console.log("Hello-2"),() => console.log("Hello-3")]);