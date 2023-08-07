// eslint-disable-next-line no-console
console.log("Hello world!");
import express from "express";
import "./helper/db.config";
import cors from "cors";
import AuthRouter from "./modules/user/auth/auth.router";
import dotenv from "dotenv";
import UserRouter from "./modules/user/user.router";
import { corsConfigure } from "./middleware/cors.middleware";
dotenv.config();
const app = express();

app.use(cors());
// app.use(corsConfigure);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//declare router
app.use("/api/auth", AuthRouter);
app.use('/api/user' , UserRouter);
app.use("*", (req, res, next) => {
	res.status(404).json("Router is not Found");
});
// get api
const port = process.env.PORT || 2100;
app.listen(port, () => console.log("app is running on port : ", port));
//post api
