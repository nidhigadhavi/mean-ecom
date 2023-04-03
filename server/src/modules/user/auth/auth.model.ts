import mongoose, { SchemaTypes } from "mongoose";
import { IAuth } from "./auth.inteface";

const authSchema = new mongoose.Schema<IAuth>({
    userId: {
        type: SchemaTypes.ObjectId,
        ref: "Admin",
        required: true
    },
    accessToken: {
        type: String,
        unique: true,
        required: true
    },
    inUse: {
        type: Boolean,
        default: true
    },
    expireAt: {
        type: Date
    },
    privileges: {
        type: [
            {
                type: String
            }
        ],
        default: []
    },
    lastUsedAt: {
        type: Date
    }
}, {
    timestamps: true,
})

interface AuthDocument extends mongoose.Document, IAuth { }

const AuthModal = mongoose.model<AuthDocument>("AuthToken", authSchema)

export default AuthModal