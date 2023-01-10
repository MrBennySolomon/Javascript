const fruits = ["Banana", "Orange", "Apple", "Mango"]; //add 'Lemon' 'Kiwi' at index 2

const spliceArr = fruits => fruits.splice(2, 0, 'Lemon', 'Kiwi');

spliceArr(fruits);

console.log(fruits);