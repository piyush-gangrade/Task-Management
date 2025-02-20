import mongoose, { Schema } from "mongoose";

interface IUser {
    email: string
    username: string
    password: string
    refreshToken: string | null
}

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        require: true
    },
    refreshToken: {
        type: String,
        require: false
    }
})



export const User = mongoose.model<IUser>("User", userSchema);