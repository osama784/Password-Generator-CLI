#!/usr/bin/env node

import inquirer from "inquirer";
import getPasswordLength from "./getPasswordLength";
import getPasswordOptions from "./getPasswordOptions";
import generatePassword from "./generatePassword";
import options from "./passwordOptions";

const main = async () => {
    const passwordLength = await getPasswordLength();
    const options: options = await getPasswordOptions();
    let checkOptions =
        options.withChars == true ||
        options.withNumbers == true ||
        options.withOthers == true;

    while (!checkOptions) {
        const options = await getPasswordOptions();
        checkOptions =
            options.withChars == true ||
            options.withNumbers == true ||
            options.withOthers == true;
    }
    const password = generatePassword(passwordLength, options);
    console.log(`Your Password: ${password}`);

    const repeat = await inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to generate another one?",
            name: "value",
        },
    ]);
    if (repeat.value) {
        main();
    }

    console.log("\nDone Succesfully!");
};

main();
