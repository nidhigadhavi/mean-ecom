import jwt from "jsonwebtoken";

export function generateToken(payload: any, willExpire = true) {
	const options: jwt.SignOptions = {};
	if (willExpire) options.expiresIn = process.env.JWT_EXPIRE_IN;
	return jwt.sign(payload, process.env.JWT_SECRET!, options);
}

export function verifyToken(token: string) {
	console.log("verify jwt token");
	return jwt.verify(token, process.env.JWT_SECRET!);
}

export const isJWTError = (error: any): boolean => {
	if (
		error instanceof jwt.JsonWebTokenError ||
		error instanceof jwt.NotBeforeError ||
		error instanceof jwt.TokenExpiredError
	) {
		return true;
	}
	return false;
};
