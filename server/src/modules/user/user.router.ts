// eslint-disable-next-line no-console
console.log("hello auth AuthRouter!");
import express from "express";
import authMiddleware from "../../middleware/authMiddleware";
import { userDetail, userDetail1, userList, editUser, removeUser } from "./user.controller";

const UserRouter = express.Router();
// get api
UserRouter.get("/:id", userDetail);
UserRouter.post("/detail", userDetail1);
UserRouter.get("/", userList);
UserRouter.put("/:id", authMiddleware, editUser);
UserRouter.delete("/:id", authMiddleware, removeUser);

export default UserRouter;
