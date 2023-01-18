//block 1
function funcA() {
  console.log(a);//undefined
  console.log(foo());//2
  var a = 1;
  function foo() {
      return 2;
  }
}
funcA();

//block 2
var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName());//Aurelio De Rosa
var test = obj.prop.getFullName;
console.log(test());//undefined

//block 3
function funcB() {
  let a = b = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a); //undefined
console.log(typeof b); //number

//block 4
function funcC() {
  console.log("1");
}
funcC();//'2'
function funcC() {
  console.log("2");
}
funcC();//'2'

//block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);//1
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);//Error e is not defined

//block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();//1

//a > b > c
