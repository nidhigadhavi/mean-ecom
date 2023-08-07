import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { HTTPErrorHandler } from "../../../helper/HttpErrorHandler";
import { generateToken } from "../../../helper/jwtTokenHandler";
import { sendHttpResponse } from "../../../helper/responseHandler";

import { createUser, findUser } from "../user.service";
import * as AuthService from "./auth.service";
import dayjs from "dayjs";
import errorHandler from "../../../helper/errorHandler";

export const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user: any = await findUser(email, "email");

		if (!user || user == null) {
			throw new HTTPErrorHandler("User does not exists.", 401);
		}
		if (!(await bcrypt.compare(password, user.password!))) {
			throw new HTTPErrorHandler("invalid password.", 401);
		}

		// This payload will be stored in generated JWT token. Don't put sensitive information in it because it is publicly visible.
		const jwtObj: any = {
			name: user.name,
			email: user.email,
		};

		console.log("into jwt payload!!!", jwtObj);

		const accessToken = generateToken(jwtObj);

		await AuthService.storeToken({
			accessToken,
			userId: user._id,
			expireAt: dayjs()
				.add(Number(process.env.JWT_EXPIRE_IN_MINUTES ?? 0), "minutes")
				.toDate(),
		});

		return sendHttpResponse({
			res,
			data: { ...jwtObj, accessToken },
			message: "Login successful",
		});
	} catch (error) {
		console.log("into catch::", error);

		errorHandler(res, error);
	}
};

export const register = async (req: Request, res: Response) => {
	const { email, name, password } = req.body;
	try {
		const existinguser = await findUser(email, "email");
		if (existinguser) {
			throw new HTTPErrorHandler("user already exsts.", 403);
		}
		const user = await createUser({
			email,
			name,
			password: await bcrypt.hash(password, 10),
		});
		return sendHttpResponse({
			res,
			data: user!,
			message: "User Register Successfully!!",
		});
	} catch (error) {
		errorHandler(res, error);
	}
};

export const logout = async (req: any, res: Response) => {
	try {
		await AuthService.updateToken(req.accessToken!, {
			inUse: false,
		});
		return sendHttpResponse({
			res,
			message: "logout sucessfully.",
		});
	} catch (error) {
		errorHandler(res, error);
	}
};
