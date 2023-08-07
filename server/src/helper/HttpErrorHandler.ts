// handle http errors

export class HTTPErrorHandler extends Error {
	status: number;
	message:string;
	constructor(error: any, status = 500) {
		super(error);		
		this.message = error;
		this.status = status;
		Object.setPrototypeOf(this, HTTPErrorHandler.prototype);
	}
}
