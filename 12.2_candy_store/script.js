const candyStore = {
    candies: [
      {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
      },
      {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
      },
    ],
    cashRegister: 200
  };

// 1. Implement the following getCandy function:
// The function should return the candy element with
// the specified id.
const getCandy = (candyStore, id) => candyStore.candies.filter(item => item.id === id)[0];
console.log(getCandy(candyStore, '5hd7y'));
// 2. Implement the following getPrice function:
// The function should return the price (number) of the
// candy with the specified id.
const getPrice = (candyStore, id) => candyStore.candies.filter(item => item.id === id)[0].price;
console.log(getPrice(candyStore, '5hd7y'));


// 3. Implement the following addCandy function:
// The function should add a new candy to the candy
// list in candyStore with a default amount of 1. The
// function will not return anything.
function addCandy(candyStore, id, name, price){
  candyStore.candies.push({
    name,
    id,
    price,
    amount: 1
  });
}
addCandy(candyStore, '111', 'lolypop', 9);
console.log(candyStore);

// 4. Implement the following buy function: The function
// should add the candy price to the cashRegister, and
// decrease the amount property of the relevant candy.
function buy(candyStore, id) {
  let candy = getCandy(candyStore, id);
  candyStore.cashRegister = candyStore.cashRegister + 1;
  candy.amount = candy.amount - 1;
}

buy (candyStore, '111');
console.log(candyStore);