/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
/* 
What's happening is that once the condition is met it will be executed. So that if is checking if the variable is greater or equal to 3.
As it is, 20 is greater than 3, so that condition is met and executes that conditional.
In order to fix the bug we have two options:
Option 1: 
  Change the order from the conditionals to go from a greater number to a smaller one.
*/
const age = 20;

if (age >= 18) {
  console.log("Most places consider you an adult.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age < 3) {
  console.log("You're just a baby!");
} else {
  console.log("What? How did this happen!?");
}
/*
  Option 2: 
  Limit the conditions to not reach from x number to infinite in the second and third conditions 
*/

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
