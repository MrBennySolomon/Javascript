'use strict'
/*--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'

2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4

3. Which of the following is/are booleans?
a) true
b) false

4. What is the result of 80 + 71.2?
a) 151.2

5. What is the result of "80" + 71.2?
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
a) number

7. Does "100" + 30 produce a number or a string?
b)string


*/

//------Submit your answers under the
//question------
//create three different ways to declare variables:
// let 
// var
// const
//declare a variable and reassign a value to it:
let num = 12;
num = 12345;
//create a variable and after that assign a string:
let num2 = 12;
num = "He's got it!";
//with its value being: He's got it!
/*
1. create a variable and assign a value on how
much a restaurant bill is: */

let bill = 208;

/* 2. create a variable and assign a value on how
much tax they should pay: */

let tax = '10'; //10%

/*3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $. */

let total = bill * (tax / 100) + bill;
console.log("Your total bill is " + total + " $");

// Round the number 50.6 to its nearest integer

total = Math.round(total);
console.log(total);

//Create a variable that is undefined
 let undefinedVariable = undefined;