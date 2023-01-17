const numbers = [1, 2, 3, 4, 5, 6, 7];


// 1. max
const max = (numbers) => {
  return numbers.reduce((accum, current) => {
    return Math.max(accum, current);
  });
}

console.log(max(numbers));

// 2. the sum of even numbers
const sumEven = (numbers) => {
  return numbers.reduce((accum, current) => {
    return current % 2 === 0 ? accum + current : accum;
  }, 0);
}

console.log(sumEven(numbers));

// 3. average
const average = (numbers) => {
  return numbers.reduce((accum, current) => {
    return accum + current;
  }, 0) / numbers.length;
}

console.log(average(numbers));