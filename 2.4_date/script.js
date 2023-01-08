'use script';

let month=new Array(12);
month[0]="January";
month[1]="Ferbuary";
month[2]="Merch";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[6]="August";
month[6]="September";
month[6]="October";
month[6]="November";
month[6]="December";

let weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

function getDate () {
  const date = new Date();
  return `
  Today is ${weekday[date.getDay()]} the ${date.getDate()} of ${month[date.getMonth()]} ${date.getFullYear()}
  `;
}

console.log (getDate());