import { FilterQuery } from "mongoose";
import { IUser, ListUserProps } from "./user.interface";
import UserModal, { UserDocument } from "./user.model";

const getUserDefultFilterQuery: FilterQuery<UserDocument> = {
	isDeleted: false,
};

export function createUser(user: Partial<IUser>) {
	console.log("register user", user);
	return UserModal.create(user);
}

export async function findUser(identifier: string, type: "id" | "email") {
	console.log("into find user!!!", identifier, type);
	if (type == "id") {
		let data = await UserModal.findById(identifier);
		return data;
	} else {
		console.log("into else");
		let data = await UserModal.findOne({ email: identifier });
		console.log("user's details are:", data);
		return data;
	}
}

export async function listUser(props: ListUserProps) {
	const filter: FilterQuery<UserDocument> = { ...getUserDefultFilterQuery };
	return UserModal.paginate(filter, {
		page: props.page ?? 1,
		limit: props.limit ?? 1,
	});
}

export async function updateUser(id: string, dataToUpdate: any) {
	return UserModal.updateOne(
		{ _id: id },
		{ $set: { name: dataToUpdate.name, email: dataToUpdate.email } }
	);
}

export async function deleteUser(id: string) {
	return UserModal.updateOne({ _id: id }, { $set: { isDeleted: true } });
}
