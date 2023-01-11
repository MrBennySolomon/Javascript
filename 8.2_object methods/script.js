//1. Create an object called ‘mycountry’ for a country of your choice, 
//containing properties ‘country’, ‘capital’, ‘language’, ‘population’ 
//and ‘neighbours’ (an array)

const myCountry = {
  country: 'Israel',
  capital: 'Jerusalem',
  language: 'Hebrew',
  population: 9.3,
  neighbours: ['Egypt', 'Syria', 'Lebanon', 'Jordan'],

  describe () {
    return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  }
};

console.log(myCountry.describe());