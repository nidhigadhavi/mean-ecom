//check whether user is login or not
import { NextFunction, Request, Response } from "express";

import errorHandler from "../helper/errorHandler";
import { HTTPErrorHandler } from "../helper/HttpErrorHandler";
import { isJWTError, verifyToken } from "../helper/jwtTokenHandler";
import { sendHttpResponse } from "../helper/responseHandler";
import {
	getToken,
	updateTokenUseTimestamp,
} from "../modules/user/auth/auth.service";

const authMiddleware = async (
	req: any,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization
			?.split(" ")
			?.splice(-1)
			?.shift();
		if (!token) {
			throw new HTTPErrorHandler(
				"authentication token is reequired.",
				403
			);
		}

		verifyToken(token);

		const storedToken = await getToken(token);
		const inUse = storedToken?.inUse ?? false;

		if (!inUse) {
			throw new HTTPErrorHandler("Unauthorized", 403);
		}

		await updateTokenUseTimestamp(token);

		// Assigning user related properties to the request.
		req.accessToken = token;
		req.userId! = storedToken?.userId;

		next();
	} catch (error) {
		if (isJWTError(error)) {
			return sendHttpResponse({
				res,
				message: "Unauthorized",
				status: 403,
			});
		}

		errorHandler(res, error);
	}
};

export default authMiddleware;
