//Block 1
(function immediateA(a) {
  return (function immediateB(b) {console.log(a);})(1);//0
})(0);



//Block 2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);//1
  }
console.log(count);//0
})();



//Block 3
var module = (function () {
  var foo = 'foo'
  function addToFoo (bam) {
    foo = bam;
    return foo;
  }
  var publicInterface = {
    bar: function () {
      return 'bar';
    },
    bam: function () {
      return addToFoo('bam')
    }   
  }
  return publicInterface
})()
console.log(module.bar())//bar
console.log(module.bam())//bam



//Block 4
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);//Count is 0
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();



//Block 5
var x = 10;
console.log(x);//10
  if (true) {
  (function() {
    var x = 20;
    console.log(x);//20
  })();
}
console.log(x);//10



//Block 6
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



//Block 7
var x;
x = 10;
function test7(){
  var x;
  if (x > 20) {
    x = 50;
  }
  console.log(x);//undefined
}
test7();



//Block 8
function test8(){
  var x, y;
  if (false) {
    x = 50;
  }
  console.log(x);//undefined
  console.log(y);//undefined
  y = 100;
  console.log(y);//100
}
test8();



//Block 9
function test9(){
  foo();
  //bar();//Error bar is not a function
  function foo(){
    console.log('foo');//'foo'
  }
  var bar = function() {
  console.log('bar');
  }
}
test9();