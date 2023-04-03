import { IAuth } from "./auth.inteface";
import AuthModal from "./auth.model";

interface loginUserPayload {
	email: string;
	password: string;
}

export const loginUser = (payload: loginUserPayload) => {
	console.log("into login!!!!", payload);
	const { email, password } = payload;
};

export const storeToken = (payload: Partial<IAuth>) => {
	console.log("into store token!!1", payload);
    return AuthModal.create(payload)
};


export const getToken = (token: string) => {
    return AuthModal.findOne({
        accessToken: token
    })
}

export const updateToken = (token: string, data: Partial<IAuth>) => {
    return AuthModal.updateOne({
        accessToken: token
    }, {
        $set: data
    })
}

/**
 * Update `lastUsed` timestamp of a token.
 * @param token A JWT token
 * @returns Updated Auth Token Document
 */
export const updateTokenUseTimestamp = (token: string) => {
    return AuthModal.updateOne({
        accessToken: token
    }, {
        $set: {
            lastUsedAt: new Date()
        }
    })
}
