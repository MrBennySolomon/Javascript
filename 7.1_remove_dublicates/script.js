const removeDuplicates = arr => {
  var unique = [];
  for(i=0; i < arr.length; i++){  
      if(unique.indexOf(arr[i]) === -1) {  
          unique.push(arr[i]);  
      }  
  }
  return unique;
}

console.log(removeDuplicates([3,4,4,3,6,3]));