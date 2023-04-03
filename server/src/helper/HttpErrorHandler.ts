// handle http errors

export class HTTPErrorHandler extends Error {
	status: number;
	constructor(error: any, status = 500) {
		super(error);
		this.status = status;
		Object.setPrototypeOf(this, HTTPErrorHandler.prototype);
		console.log("http error handler!!!");
	}
}
