import mongoose, { model, Schema } from "mongoose";

interface ITask{
    title: string
    description: string
    deadline: Date
    status: string
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
    },
    status: {
        type: String,
        enum: [
            "pending",
            "in-process",
            "completed",
            "expired"
        ]
    }
})

export const Task = model<ITask>("Task", taskSchema);