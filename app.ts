import inquirer from "inquirer";

const calculator:{
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {
        type:"number",
        name:"numberOne",
        message: "Enter 1st Numeric Value:"
    },
    {
        type:"number",
        name:"numberTwo",
        message: "Enter 2nd Numeric Value:"
    },
    {
        type:"list",
        name:"operator",
        message: "Select operation to perform: ",
        choices: ["+", "-", "x", "/"]
    }
])

const {numberOne, numberTwo, operator} = calculator;

if (numberOne && numberTwo && operator) {
    let result;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "x") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log(`Answer: ${result}`)
}else{
    console.log("Input is not valid. Try again!")
}