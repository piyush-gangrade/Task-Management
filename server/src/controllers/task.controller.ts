import { Request, Response } from "express";
import { TaskRequest, TaskParams, TaskUpdateRequest } from "../utilities/Types/TaskRequest";
import { Task } from "../models/task.model";

const getAllTasks = async(req: Request, res: Response)=>{
    try{
        const tasks = await Task.find({});

        const date = new Date();
        const currentDate: number = date.getDate();
        const currentMonth: number = date.getMonth();
        const currentYear: number = date.getFullYear();

        tasks.map(async(task) => {
            const taskDate: number = task.deadline.getDate();
            const taskMonth: number = task.deadline.getMonth();
            const taskYear: number = task.deadline.getFullYear();
            if((taskDate<currentDate) &&
                (taskMonth<=currentMonth) &&
                (taskYear<=currentYear) &&
                (task.status !== "expired"))
            {
                await Task.findByIdAndUpdate(
                    task._id,
                    {status: "expired"}
                )
            }
        })

        const updatedTasks = await Task.find({});

        res.status(200).json({response: updatedTasks, success: true})
    }
    catch(err){
        console.error("Get all task", err);
        res.status(500).json({response: "Server is unavailable.", success: false})
    }

}

const getTask = async(req: Request<TaskParams>, res: Response)=>{
    try{
        const id = req.params.id;
        const task = await Task.findById(id);
        if(!task){
            res.status(404).json({response: "Task ID is invalid", success: false})
        }

        res.status(200).json({response: task, success: true})
    }
    catch(err){
        console.error("Get particular task", err);
        res.status(500).json({response: "Server is unavailable.", success: false})
    }
}

const addNewTask = async(req: Request<{},{},TaskRequest>, res: Response)=>{
    try{
        // console.log(req.body)
        const title = req.body.title;
        const description = req.body.description;
        const deadline = req.body.deadline;
        if(!title || !description || !deadline){
            console.error("Task data is insufficient.")
            res.status(404).json({response: "Task data is insufficient.", success: false})
        }
        const deadlineDate = new Date(deadline)

        const task = new Task({
            title: title,
            description: description,
            deadline: deadlineDate,
            status: "pending"
        })
        await task.save();
        // console.log(task);

        res.status(200).json({response: "Task is successfully added.", success: true})
    }
    catch(err){
        console.error("Add new task", err);
        res.status(500).json({response: "Server is unavailable.", success: false})

    }
}

const updateTask = async(req: Request<TaskParams,{},TaskUpdateRequest>, res: Response)=>{
    try {
        const {title, description, deadline, status} = req.body;
        const id = req.params.id;
        if(!id || !title || !description || !deadline || !status){
            console.error("Task data is insufficient.")
            res.status(404).json({response: "Task data is insufficient.", success: false})
        }

        const deadlineDate = new Date(deadline);

        const task = await Task.findByIdAndUpdate(
            id,
            {
                title: title,
                description: description,
                deadline: deadlineDate,
                status: status
            },
            {new: true}
        );
        if(!task){
            res.status(404).json({response: "Task ID is invalid", success: false})
        }
        // console.log(task);

        res.status(200).json({response: "Task is successfully updated.", success: true})
    } 
    catch (err) {
        console.error("Add new task", err);
        res.status(500).json({response: "Server is unavailable.", success: false})
    }
}

const deleteTask = async(req: Request<TaskParams>, res: Response)=>{
    try{
        const id = req.params.id;
        if(!id){
            res.status(404).json({response: "Task ID is required", success: false})
        }

        const task = await Task.findByIdAndDelete(id);

        // console.log(task);
        res.status(200).json({response: "Task is successfully deleted.", success: true})

    }
    catch(err){
        console.error("Add new task", err);
        res.status(500).json({response: "Server is unavailable.", success: false})
    }
}

export {
    getAllTasks,
    getTask,
    addNewTask,
    updateTask,
    deleteTask
}