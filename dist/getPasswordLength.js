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
const getPasswordLength = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt([
        {
            type: "number",
            name: "passwordLength",
            message: "Enter the password length between 4 and 20: ",
            validate: (value) => {
                if (4 <= value && value <= 20) {
                    return true;
                }
                return false;
            },
        },
    ]);
    return answer.passwordLength;
});
exports.default = getPasswordLength;
