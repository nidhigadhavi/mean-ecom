import { Request, Response } from "express";
import errorHandler from "../../helper/errorHandler";
import { sendHttpResponse } from "../../helper/responseHandler";
import { createUser, findUser, listUser, updateUser, deleteUser } from "./user.service";

export async function userDetail1(req: Request, res: Response) {
	const { identifier, type } = req.body;
	console.log("user detials", identifier, type);
	try {
		const detail = await findUser(identifier, type);
		console.log("user detail is::", detail);
		return sendHttpResponse({
			res,
			status: 200,
			data: detail,
			message: "user retrived successfully.",
		});
	} catch (error) {
		console.log("error in user detail", error);
		errorHandler(res, error);
	}
}

export async function userDetail(req: Request, res: Response) {
	try {
		const { id } = req.params;
		console.log("user detials", id);
		const detail = await findUser(id, "id");
		console.log("user detail is::", detail);
		return sendHttpResponse({
			res,
			status: 200,
			data: detail,
			message: "user retrived successfully.",
		});
	} catch (error) {
		console.log("error in user detail", error);
		errorHandler(res, error);
	}
}

export async function editUser(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const user = await updateUser(id, req.body);
		console.log("updated user is", user);
		return sendHttpResponse({
			res,
			status: 200,
			data: user,
			message: "User updated successfully.",
		});
	} catch (error) {
		console.log("error in update user!!");
		errorHandler(res, error);
	}
}

export async function userList(req: Request, res: Response) {
	try {
		console.log("list users", req.query);
		const { limit, page, s } = req.query as { [key: string]: any };
		const users = await listUser({
			limit,
			page,
			searchTerm: s,
		});
		// return res.json(devices);
		// const list = await listUser();
		return sendHttpResponse({
			res,
			status: 200,
			data: users,
			message: "user's list retrived sucessfully",
		});
	} catch (error) {
		errorHandler(res, error);
	}
}


export async function removeUser(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const user = await deleteUser(id);
		console.log("updated user is", user);
		return sendHttpResponse({
			res,
			status: 200,
			data: user,
			message: "User updated successfully.",
		});
	} catch (error) {
		console.log("error in update user!!");
		errorHandler(res, error);
	}
}
