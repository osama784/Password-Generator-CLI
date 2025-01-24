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
const getPasswordOptions = () => __awaiter(void 0, void 0, void 0, function* () {
    const options = yield inquirer_1.default.prompt([
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
});
exports.default = getPasswordOptions;
