var answer = 0;

const baseValue = value => multipleValue => value * multipleValue;

const multiple = baseValue(2);
answer = multiple(5);
console.log(answer);//10