'use script';

function getDate () {
  const date = new Date();
  let day = date.toLocaleString("en-us", { weekday: "long" });
  let month = date.toLocaleString("en-us", { month: "long" });
  let dateNum = date.getDate();
  let year = date.getFullYear();

  return `Today is ${day} the ${dateNum} of ${month} ${year}`;
}

console.log (getDate());