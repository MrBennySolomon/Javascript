'use strict'

const worldPopulation = 7900000000;

function percentageOfWorld1 (population) {
  
  return ((population / worldPopulation) * 100);
}

const china = percentageOfWorld1(1441000000);
const israel = percentageOfWorld1(9800000);
const france = percentageOfWorld1(64000000);

console.log (china);
console.log (israel);
console.log (france);

const percentageOfWorld2 = (population) => ((population / worldPopulation) * 100);

console.log (percentageOfWorld2(1441000000));
console.log (percentageOfWorld2(9800000));
console.log (percentageOfWorld2(64000000));
