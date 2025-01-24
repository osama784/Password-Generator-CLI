import options from "./passwordOptions";

const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
const numbers = "1234567890";
const others = "$#@&";
let all: string[] = [];

const generatePassword = (size: number, options: options) => {
    options.withChars ? all.push(chars) : "";
    options.withNumbers ? all.push(numbers) : "";
    options.withOthers ? all.push(others) : "";

    let password = "";
    let currentPattern;
    for (let i = 0; i < size; i++) {
        currentPattern = all[i % all.length];
        password += currentPattern.charAt(
            Math.floor(Math.random() * currentPattern.length)
        );
    }
    return password;
};

export default generatePassword;
