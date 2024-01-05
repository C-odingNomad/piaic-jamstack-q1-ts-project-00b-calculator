// In this program I have created a simple calculator using inquirer lib of npm.

// importing inquirer:
import inquirer from "inquirer";

// creating a variable "calculator":
const calculator: {
  numberOne: number;
  numberTwo: number;
  operator: string;
} = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Enter 1st Numeric Value:",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "Enter 2nd Numeric Value:",
  },
  {
    type: "list",
    name: "operator",
    message: "Select operation to perform: ",
    choices: ["+", "-", "x", "/"],
  },
]);

// Storing the inputs in "calculator" variable:
const { numberOne, numberTwo, operator } = calculator;

// Applying / Creating logic to calculate the user input:
if (numberOne && numberTwo && operator) {

// Initializing the variable "result" for storing the calculated values later:   
   let result;
  if (operator === "+") {
    result = numberOne + numberTwo;
  } else if (operator === "-") {
    result = numberOne - numberTwo;
  } else if (operator === "x") {
    result = numberOne * numberTwo;
  } else if (operator === "/") {
    result = numberOne / numberTwo;
  }
//   Printing the final answer:
  console.log(`Answer: ${result}`);
} else {
    // If the input was invalid, this will print:
  console.log("Input is not valid. Try again!");
}

// Thanks for reading it all. 😅🤙😎
// Don't forget to try it.
