import mongoose from "mongoose";
import paginator from "mongoose-paginate-v2";
import { IUser } from "./user.interface";

const userSchema = new mongoose.Schema<IUser>(
	{
		name: {
			type: "String",
			required: true,
		},
		email: {
			type: "String",
			required: true,
			unique: true,
		},
		password: {
			type: "String",
			required: true,
		},
		isDeleted: { type: "Boolean", default: false },
	},
	{
		timestamps: true,
	}
);
userSchema.plugin(paginator);

export interface UserDocument extends mongoose.Document, IUser {}
const UserModal = mongoose.model<
	UserDocument,
	mongoose.PaginateModel<UserDocument>
>("User", userSchema);

export default UserModal;
