
const countryToLiveIn = (language, isIsland, population, country) => {
  if (
    language.toLowerCase() === "english" &&
    population < 50 &&
    isIsland === false
  ) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} doesn't meet your criteria`);
  }
};

const isIsland = false;
const population = 40;
const country = "Canada";
const language = "english";

countryToLiveIn(language, isIsland, population, country);