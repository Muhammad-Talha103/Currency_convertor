#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    SAR: 3.75,
    PKR: 277.70,
    IRR: 42000,
    EUR: 0.92,
    INR: 83.29,
};
let retry = true;
while (retry) {
    let input = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            message: "Select Currency From :",
            choices: ["USD", "SAR", "PKR", "IRR", "EUR", "INR"]
        },
        {
            type: "list",
            name: "to",
            message: "Select Currency To :",
            choices: ["USD", "SAR", "PKR", "IRR", "EUR", "INR"]
        },
        {
            type: "input",
            name: "ammunt",
            message: "Enter Your Amount"
        }
    ]);
    let ammuntFrom = currency[input.from];
    let ammuntTo = currency[input.to];
    let ammunt = input.ammunt;
    let amountBase = ammunt / ammuntFrom;
    let ammuntConvert = amountBase * ammuntTo;
    console.log(ammuntConvert.toFixed(2));
    const again = await inquirer.prompt({
        type: "confirm",
        name: "again",
        message: "Did You Want To Convert More ?",
        default: false
    });
    retry = again.again;
}
