// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
const elad = {
  name: "elad"
};
const ron = {
  name: "Ron"
};
const ohad = {
  name: "Ohad"
};
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
const map = new Map();
map.set(elad, 1);
map.set(ron, 2);
map.set(ohad, 3);
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id

for (const i of map) {
  console.log(...Object.values(...i));
  console.log(i[1]);
}

// const maxCount = 1000000;
// console.time("My operation")// <---- Starts the timer
// for(let i =0; i < maxCount; i++){
// //Perform the operation to be measured multiple times
// } console.timeEnd("My operation") // <----

///////////////////////////////////////////////

// 1. Who can add key and value pairs faster in a for loop?
// • Create an empty Object and assign it to a variable.
// • Create a start timer for your object to be measured.
// • Create a for loop that will iterate a million times. Inside
//   your for loop on each iteration create a new key, value
//   pair to your object using the variable I.
// • Do the same procedure for a Map object.
// • Compare the times.
// You may be surprised from the results :)
const obj = {};
console.time("obj for loop"); // <---- Starts the timer

for (let i = 0; i < 1000000; i++) {
  obj[i] = i;
  
}

console.timeEnd("obj for loop"); // <----

const map5 = new Map();

console.time("map for loop"); // <---- Starts the timer

for (let i = 0; i < 1000000; i++) {
  map5.set(i, i);
  
}

console.timeEnd("map for loop"); // <----
// 2. Who can find faster a specific property from itself?
// Now that we populated 100000 properties to our
// object’s find the following:
// • Find out how long time would it take for the Object to
// find a specific property from itself.
// • Find out how long time would it take for the Map to find
// a specific property from itself.

console.time("obj find a specific property from itself"); // <---- Starts the timer

obj[1000];

console.timeEnd("obj find a specific property from itself"); // <----
console.time("map find a specific property from itself"); // <---- Starts the timer
map5.get('1000');

console.timeEnd("map find a specific property from itself"); // <----
// 3. Who is faster in adding a single entry?
console.time("map adding a single entry"); // <---- Starts the timer
map5.set('000', 0);

console.timeEnd("map adding a single entry"); // <----
console.time("obj adding a single entry"); // <---- Starts the timer
obj[0] = 0;

console.timeEnd("obj adding a single entry"); // <----

// 4. Who is faster in deleting a single entry?

console.time("map deleting a single entry"); // <---- Starts the timer
map5.delete('000');

console.timeEnd("map deleting a single entry"); // <----
console.time("obj deleting a single entry"); // <---- Starts the timer
delete obj[0];

console.timeEnd("obj deleting a single entry"); // <----