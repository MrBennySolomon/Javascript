function colorPicker(color) {
  let returnVal;
  switch (color) {
    case 'yellow':
    case 'pink':
    case 'orange':
      returnVal = 'lightColor';
      break;
    case 'blue':
    case 'purple':
    case 'brown':
      returnVal = 'darkColor';
      break;
    default:
      returnVal =  'Unknown color';
  }

  return returnVal;
}

console.log(colorPicker('blue'));

/*
Create a function that receives one argument, a string color. Create a switch statement that:
1. If the color is yellow, pink, or orange return from the function “light color”.
2. If the color is a blue, purple, or brown return from the function “dark color”.
3. If the color is none of the above return “Unknown color”.
Note:
It shouldn’t be case sensitive
*/