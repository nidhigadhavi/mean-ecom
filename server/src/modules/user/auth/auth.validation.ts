import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import requestSchemaValidator from "../../../helper/requestSchemaValidator";

export const registerValidationSchema = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const schema = Joi.object({
		email: Joi.string().email().trim().required(),
		name: Joi.string().trim().required(),
		password: Joi.string().trim().required(),
	});
	requestSchemaValidator(schema, req, res, next);
};

export const loginValidationSchema = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const schema = Joi.object({
		email: Joi.string().email().trim().required(),
		password: Joi.string().trim().required(),
	});
	requestSchemaValidator(schema, req, res, next);
};
