export interface AuthResponse {
	name: string;
	email: string;
	accessToken: string;
}

export class AuthResponse {
	constructor(param: AuthResponse) {
		this.email = param.email;
		this.name = param.name;
		this.accessToken = param.accessToken;
	}
}
