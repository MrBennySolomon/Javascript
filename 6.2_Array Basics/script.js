let people = ["Greg", "Mary", "Devon", "James"];

function iterate(people) {
  for (let person of people) {
    console.log(person);
  }
}

people.shift();
people.pop()
people.unshift('Matt');
people.push('Benny');
iterate(people);

for (let person of people) {
  if (person === 'Mary') {
    break;
  }
}

const people2 = people.slice(2);

console.log(people2);
console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, 'Elizabeth');
console.log(people);

people.splice(3, 0, 'Artie');
console.log(people);

console.log(people2.splice());

const withBob = people.join(' ') + " Bob"

console.log(withBob);