import inquirer from "inquirer";

const getPasswordOptions = async () => {
    const options = await inquirer.prompt([
        {
            type: "confirm",
            name: "withChars",
            message: "Do you want to append chars [a-z/A-Z]?",
        },
        {
            type: "confirm",
            name: "withNumbers",
            message: "Do you want to append numbers [0-9]?",
        },
        {
            type: "confirm",
            name: "withOthers",
            message: "Do you want to other characters [$#@&]?",
        },
    ]);

    return options;
};

export default getPasswordOptions;
