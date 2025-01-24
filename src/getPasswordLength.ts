import inquirer from "inquirer";

const getPasswordLength = async () => {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "passwordLength",
            message: "Enter the password length between 4 and 20: ",
            validate: (value) => {
                if (4 <= value! && value! <= 20) {
                    return true;
                }
                return false;
            },
        },
    ]);

    return answer.passwordLength;
};

export default getPasswordLength;
