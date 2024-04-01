#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter your firstNmuber", type: "number", name: "firstNumber" },
    { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform operation", type: "list", name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"] }
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else
    (console.log("invalid input"));
