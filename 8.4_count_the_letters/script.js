const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let dict = {
  a:0,b:0,c:0,d:0,e:0,f:0,
  g:0,h:0,i:0,j:0,k:0,l:0,
  m:0,n:0,o:0,p:0,q:0,r:0,
  s:0,t:0,u:0,v:0,w:0,x:0,
  y:0,z:0
};
const lettersCount = (array) => {

  let join = array.join('');
  join = join.toLowerCase();
  join = join.replace(/\s/g, '');

  console.log(join);

  for (let i = 0; i < join.length; i++) {
    dict[join[i]]++;
    console.log(dict[join[i]]);
  }

};

//console.log(checkMax(dict));

lettersCount(array);

console.log(dict);

let maximum = 0;
let key;

let winner = {};

 // for (const max in dict) {
  for (let [key, value] of Object.entries(dict)) {

    console.log(value);
    if (value > maximum) {
      maximum = value;
      winner.char = key;
      winner.count = value;
    }    
  }

  console.log(winner);