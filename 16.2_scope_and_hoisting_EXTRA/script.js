//Block 1
var x = 10;
console.log(x);//10
if (true) {
  var x = 20;
  console.log(x);//20
}
console.log(x);//20


//Block 2
var x = 10;
console.log(x);//10
if (true) {
  (function() {
    var x = 20;
    console.log(x);//20
  })();
}
console.log(x);//10



//Block 3
var x = 10;
console.log(x);//10
function test(){
  var x = 20;
  console.log(x);//20
  if (x > 10) {
    let x = 30;
    console.log(x);//30
  }
  console.log(x);//20
}
test();
console.log(x);//10


//Block 4
var x;
x = 10;
function test4(){
  var x;
  if (x > 20) {
    x = 50;
  }
  console.log(x);//undefined
}
test4();


//Block 5
function test5(){
  var x, y;
  if (false) {
    x = 50;
  }
  console.log(x);//undefined
  console.log(y);//undefined
  y = 100;
  console.log(y);//100
}
test5();


//Block 6
function test6(){
  foo();//'foo'
  //bar();//Error bar is not a function
  // Function defiened
  // using function declaration
  function foo(){
    console.log('foo');
  }
  // Function defined
  // using function expression
  var bar = function() {
    console.log('bar');
  }
}
test6();