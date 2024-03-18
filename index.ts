import inquirer from "inquirer";
import ListPrompt from "inquirer/lib/prompts/list.js";

const answer = await inquirer.prompt([
  //prompt is for taking inputs from people.
  { message: "Enter First Number", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select One Of The Operators",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operators === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
} else {
  ("Please select a valid operator");
}
