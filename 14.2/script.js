const arr = [
  {
      lol: 1
  },
  {
      lol: 7
  },
  {
      lol: 11
  },
  {
      lol: 89
  },

];

// 1. Write a function called extractOnlyValue which accepts an
// array of objects and a key and returns a new array with
// the value of each object at the key
const extractOnlyValue = (arr, key) => {
  const arrValues = [];
  return arr.reduce((accum, current) => {
     accum.push(current[key]);
     return accum;
  }, []);

  return arrValues;
}

console.log(extractOnlyValue(arr, 'lol'));

// 2. Write a function called countOnlyVowels which accepts a
// string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count
const str = "qwertyuasdfghaaeaeaeiiioooouuujklzgbm,x?!";
const vaouls = 'aeiou';
const countOnlyVowels = str => {
  const arr = str.split('');
  return arr.reduce((accum, current) => {
    if (vaouls.includes(current)){
      accum[current] = accum[current] > 0 ? accum[current] + 1 : 1;
    }
    return accum;
  }, {});
};
console.log(countOnlyVowels(str));
// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function

const objArr = [
  {
    name:'jhon',
    id: 123
  }, 
  {
    name:'jwehon',
    id: 1443
  },
  {
    name:'jhqweon',
    id: 35423
  }
]
const addKeyAndValue = (objArr, key, value) => {
  return objArr.reduce((accum, current) => {
      current[key] = value;
     accum.push(current);
    return accum;
  }, []);
}

console.log(addKeyAndValue(objArr, 'surname', 'Doe'));