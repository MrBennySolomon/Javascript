
function average (arr) {

  let sum = 0;

  for (let i of arr) {
    sum += i;
  }
  return (sum / arr.length); 
}

function winner (arrTeamAndScore) {
  let highestScore = [0, 'a', 'tie'] ;

  for (let i of arrTeamAndScore) {

    if (highestScore[0] < Math.max(i[1])) {
      highestScore[0] = Math.max(i[1]);
      highestScore[1] = i[0];
      highestScore[2] = 'winner';
    }else if (highestScore[0] === Math.max(i[1])) {
        highestScore[0] = Math.max(i[1]);
        highestScore[1] = i[0];
        highestScore[2] = 'tie';
    }
  }
  return highestScore;
}


//console.log(winner([johnTeam, mikeTeam]));
//console.log(winner([mikeTeam, johnTeam]));
let johnTeam = average([89, 120, 103]);
let mikeTeam = average([97, 134, 105]);
let maryTeam = average([97, 134, 105]);

console.log(johnTeam, mikeTeam, maryTeam);

console.log(winner([['johnTeam',johnTeam], ['mikeTeam',mikeTeam], ['maryTeam',maryTeam]]));