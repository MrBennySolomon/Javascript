const numbers = [1, -5, 666, 2, 400, 11];

// 1. Sort the array of numbers from descending to ascending
// order.

const desc = numbers => numbers.sort((a, b) => b - a);
const asc = numbers => numbers.sort((a, b) => a - b);



console.log(desc(numbers));
console.log(asc(numbers));

// 2. Sort the array of numbers from ascending to descending
// order.

console.log(desc(numbers));
