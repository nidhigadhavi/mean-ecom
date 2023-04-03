import mongoose from "mongoose"

export interface IAuth {
    userId: mongoose.Types.ObjectId
    privileges?: string[]
    accessToken: string
    inUse: boolean
    lastUsedAt: Date
    expireAt: Date
    createdAt: Date
    updatedAt: Date
}