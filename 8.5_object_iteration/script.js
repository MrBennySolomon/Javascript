const swap = (obj) => {

  let newObj = {};

  for (const key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj
}

const test = {
  name:'Benny',
  role:'fullstack'
};

console.log(swap(test));