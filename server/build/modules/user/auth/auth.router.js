"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-console
console.log("hello auth AuthRouter!");
var express_1 = __importDefault(require("express"));
var auth_controller_1 = require("./auth.controller");
var AuthRouter = express_1.default.Router();
// get api
AuthRouter.get("/", function (req, res, next) {
    res.send("auth get is called!");
});
AuthRouter.get("/download-file", function (req, res) {
    console.log(__dirname);
    var filePath = "src/image/download.jpeg";
    res.download(filePath, "downloaded-book.jpeg", // Remember to include file extension
    function (err) {
        if (err) {
            res.send({
                error: err,
                msg: "Problem downloading the file",
            });
        }
    });
});
AuthRouter.post("/login", auth_controller_1.login);
AuthRouter.post("/register", auth_controller_1.register);
AuthRouter.post("/logout", auth_controller_1.logout);
exports.default = AuthRouter;
