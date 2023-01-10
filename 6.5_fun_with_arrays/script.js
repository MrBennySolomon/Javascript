const someObject ={lorem : 'ipsum'};
let arr= new Array(100);
arr.fill(someObject,0)

let arr2 = Array.from({ length: 100 },(value, index) => index + 1);

console.log(arr2);

let arrValues = Array.from(arr.map((obj) => {return Object.values(obj)}));
arrValues = Array.from(Object.values(arrValues));

console.log(arrValues);
console.log(arr);

let arr3 = arr;

let arr4 = [];

arr4.push(arr)

console.log(arr4);
console.log(arr3);

console.log(Array.isArray(arr4));