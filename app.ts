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
        choices: ["Addition +", "Subtraction -", "Multiplication x", "Division /"]
    }
])