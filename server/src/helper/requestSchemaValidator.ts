import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import errorHandler from "./errorHandler";
import { sendHttpResponse } from "./responseHandler";

const requestSchemaValidator = async (
	schema: Schema,
	req: Request,
	res: Response,
	next: NextFunction,
	validationMode: "body" | "header" | "query" | "param" = "body"
) => {
	try {
		let data = {};
		switch (validationMode) {
			case "body":
				data = req.body
				break;
			case "header":
				data = req.headers
				break;
			case "query":
				data = req.query
				break;
			case "param":
				data = req.params
				break;

			default:
                throw new Error("Something went wrong!")
		}
		await schema.validateAsync(data);
		next();
	} catch (error) {
		if (error instanceof Joi.ValidationError) {
			return sendHttpResponse({
				res,
				message: error.message,
				status: 400,
			});
		}
		errorHandler(res, error);
	}
};

export default requestSchemaValidator;
