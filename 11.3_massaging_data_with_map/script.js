const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
  },
  },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
  },
  },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
  },
  },
  ];

// 1. Create a function that returns all the names from the array.
const names = data => {
  return data.map(item => item.name);
}
console.log(names(data));
// 2. Create a function that returns all the objects that are born
// before 1990.
const before1990 = data => {
  let newObj = [];
  data.forEach(element => {
    const year = +(element.birthday.split("-")[2]);
    if (year < 1990) {
      newObj.push(element);
  }
  });
  return newObj;
}
console.log(before1990(data));
// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
const foods = data => {
  let foodObj = {};
  data.forEach(element => {
    for (let i = 0; i < element.favoriteFoods.meats.length; i++) {
      if (!foodObj.hasOwnProperty(element.favoriteFoods.meats[i])) {
        foodObj[element.favoriteFoods.meats[i]] = 1;
      }else {
        foodObj[element.favoriteFoods.meats[i]] = foodObj[element.favoriteFoods.meats[i]] + 1;
      }
    }

    for (let i = 0; i < element.favoriteFoods.fish.length; i++) {
      if (!foodObj.hasOwnProperty(element.favoriteFoods.fish[i])) {
        foodObj[element.favoriteFoods.fish[i]] = 1;
      }else {
        foodObj[element.favoriteFoods.fish[i]] = foodObj[element.favoriteFoods.fish[i]] + 1;
      }
    }
   
  })
  return foodObj;
}

console.log(foods(data));