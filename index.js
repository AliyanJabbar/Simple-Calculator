import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    { message: "Select One Of The Operators", type: "list", name: "operators", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
if (answer.operators === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    "Please select a valid operator";
}
