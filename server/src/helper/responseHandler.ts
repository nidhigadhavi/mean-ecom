import { Response } from "express";

interface IHttpResponse {
	res: Response;
	data?: any;
	status?: number;
	message: string;
}

export const sendHttpResponse = ({
	status = 200,
	...data
}: IHttpResponse) => {
    return data.res.status(status).json({
        data: data.data,
        message: data.message,
        status
    })
};

