const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const asc = foods => foods.sort();

console.log(asc(foods));

const desc = foods => foods.reverse();

console.log(desc(foods));

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
  ];

  const ascUpperIncluded = (foodsWithUpperCase) =>foodsWithUpperCase.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

  console.log(ascUpperIncluded(foodsWithUpperCase));

  const descUpperIncluded = (foodsWithUpperCase) =>foodsWithUpperCase.sort(function (a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
});

console.log(descUpperIncluded(foodsWithUpperCase));

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const ascWordsSize = (words) => {
  return words.sort((a, b) => b.length - a.length);
};

console.log(ascWordsSize(words));