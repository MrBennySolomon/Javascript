'use strict'

function countryInfo (country, population, capitalCity) {
  return `
  ${country} has ${population} million people and its capital city is ${capitalCity}
  `;
}

let israel = countryInfo('Israel', 9.6, 'Jerusalem');
let france = countryInfo('France', 68, 'Paris');
let italy = countryInfo('Italy', 58.8, 'Rome');


console.log(israel);
console.log(italy);
console.log(france);