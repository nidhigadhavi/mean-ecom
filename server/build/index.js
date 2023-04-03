"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-console
console.log("Hello world!");
var express_1 = __importDefault(require("express"));
var auth_router_1 = __importDefault(require("./modules/user/auth/auth.router"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
//declare router
app.use("/auth", auth_router_1.default);
app.use("*", function (req, res, next) {
    res.status(404).json("Router is not Found");
});
// get api
var port = process.env.PORT || 2100;
app.listen(port, function () { return console.log("app is running on port : ", port); });
//post api
