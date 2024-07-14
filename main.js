import inquirer from "inquirer";
let myBalance = 25000;
let myPin = 5467;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.q1 === myPin) {
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAnswer.amount <= myBalance) {
            myBalance -= amountAnswer.amount;
            console.log("your remainig balance is :" + myBalance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
