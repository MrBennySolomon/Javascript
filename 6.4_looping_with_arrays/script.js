const worldPopulation = 7900000000;
const populations = [9300000, 68000000, 42000000, 212000000];

function percentageOfWorld (population) {
  return ((population / worldPopulation) * 100);
}

function populationPercentages(populations) {

  let percentages = [];

  for (let pop of populations) {
    percentages.push(percentageOfWorld(pop))
  }

  console.log(percentages[0]);
  console.log(percentages[1]);

  return percentages;
}



console.log(populationPercentages(populations));