const prompt = require("prompt-sync")();

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const input = prompt("Enter a list of numbers separated by spaces: ");
const values = input.split(" ").map(Number);

for (const value of values) {
  console.log(`${value} is ${checkEvenOdd(value)}`);
}
