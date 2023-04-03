"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = exports.createUser = void 0;
var user_model_1 = __importDefault(require("./user.model"));
function createUser(user) {
    console.log("register user", user);
    return user_model_1.default.create(user);
}
exports.createUser = createUser;
function findUser(identifier, type) {
    console.log("into find user!!!", identifier);
    if ((type = "id")) {
        return user_model_1.default.findById(identifier);
    }
    return user_model_1.default.findOne({ email: identifier });
}
exports.findUser = findUser;
