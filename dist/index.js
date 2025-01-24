#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const getPasswordLength_1 = __importDefault(require("./getPasswordLength"));
const getPasswordOptions_1 = __importDefault(require("./getPasswordOptions"));
const generatePassword_1 = __importDefault(require("./generatePassword"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const passwordLength = yield (0, getPasswordLength_1.default)();
    const options = yield (0, getPasswordOptions_1.default)();
    let checkOptions = options.withChars == true ||
        options.withNumbers == true ||
        options.withOthers == true;
    while (!checkOptions) {
        const options = yield (0, getPasswordOptions_1.default)();
        checkOptions =
            options.withChars == true ||
                options.withNumbers == true ||
                options.withOthers == true;
    }
    const password = (0, generatePassword_1.default)(passwordLength, options);
    console.log(`Your Password: ${password}`);
    const repeat = yield inquirer_1.default.prompt([
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
});
try {
    main();
}
catch (e) {
    console.log("hello");
}
