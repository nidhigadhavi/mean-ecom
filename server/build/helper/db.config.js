"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect(process.env.DB_URL)
    .then(function () {
    console.log("Database Connected Sucessfully");
})
    .catch(function (error) {
    console.log("error in db connections", error);
});
