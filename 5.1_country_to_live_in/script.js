function countryToLiveIn(language, isIsland, population, country) {
  if ((language === 'english') && (population < 50000000) && (!isIsland)) {
    return `You should live in ${country}`;
  }else {
    return `${country} does not meet your criteria`;
  }
}

const finland = countryToLiveIn('finnish', true, 5541000, 'finland');
const florida = countryToLiveIn('english', false, 21780000, 'florida');

console.log(finland, florida);