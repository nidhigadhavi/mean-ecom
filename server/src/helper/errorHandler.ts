import { Response } from "express";
import { HTTPErrorHandler } from "./HttpErrorHandler";
import { sendHttpResponse } from "./responseHandler";

const errorHandler = (res: Response, error: any) => {
	console.log("----into error handler", error);
	
	if (!(error instanceof HTTPErrorHandler)) {
		console.log("error", error);
	}

	let message = "Something went wrong!";
	let status = 500;


	if (error instanceof HTTPErrorHandler) {
		message = error.message;
		status = error.status;
	}

	sendHttpResponse({
		res,
		status,
		message,
	});
};

export default errorHandler;
