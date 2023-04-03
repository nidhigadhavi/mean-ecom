// eslint-disable-next-line no-console
console.log("hello auth AuthRouter!");
import express from "express";
import authMiddleware from "../../../middleware/authMiddleware";

import { login, logout, register } from "./auth.controller";
import {
	loginValidationSchema,
	registerValidationSchema,
} from "./auth.validation";
const AuthRouter = express.Router();
// get api
AuthRouter.get("/", (req, res, next) => {
	res.send("auth get is called!");
});

AuthRouter.get("/download-file", (req, res) => {
	console.log(__dirname);
	const filePath = "src/image/download.jpeg";
	res.download(
		filePath,
		"downloaded-book.jpeg", // Remember to include file extension
		(err) => {
			if (err) {
				res.send({
					error: err,
					msg: "Problem downloading the file",
				});
			}
		}
	);
});

AuthRouter.post("/login", loginValidationSchema, login);

AuthRouter.post("/register", registerValidationSchema, register);

AuthRouter.post("/logout", authMiddleware, logout);

export default AuthRouter;
