'use strict'

const numSiblings = prompt ('How many siblings do you have?');

if (numSiblings === '1') {
  console.log('1 sibling');
}else if (numSiblings > '1') {
  console.log('More than 1 sibling');
}else {
  console.log('No siblings');

}