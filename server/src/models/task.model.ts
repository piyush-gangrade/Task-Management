import mongoose, { model, Schema } from "mongoose";

interface ITask{
    title: string
    description: string
    deadline: Date
}

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
})

export const Task = model<ITask>("Task", taskSchema);