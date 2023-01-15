
//Create a function that takes these two arrays as arguments.
//Compare these two arrays using 2 for loops and return the
//items that are the same. If none are the same return false.


const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];


const compare = (food, food1) => {
  let result = [];

  for (let foodItem1 of food) {
    for (let foodItem2 of food1) {
      if (foodItem1 === foodItem2) {
        result.push(foodItem1);
      }
    }
  }
  return result.length === 0 ? false : result;  
}

console.log(compare(food, food1));