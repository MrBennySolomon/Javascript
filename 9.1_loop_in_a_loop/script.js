const listOfNeighbours = [
["Canada", "Mexico"],
["Spain"],
["Norway", "Sweden", "Russia"],
];

const print = arr => {
  for (let country of arr) {
    for (let i of country) {
      console.log(`Neighbour: ${i}`);
    }
  }
};

console.log(print(listOfNeighbours));