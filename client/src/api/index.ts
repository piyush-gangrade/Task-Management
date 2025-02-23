import axios from "axios";
import { UserRegister } from "../types/User";

interface NewTask {
    title: string
    description : string
    deadline: Date
}

interface UpdateTask extends NewTask {
    status: string
}

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const register = ({username, email, password}: UserRegister)=>{
    return axios.post("/auth/register", {username, email, password});
}

const getAllTasks = ()=>{
    return axios.get("/tasks")
}

const getTask = (id: string)=>{
    return axios.get(`/tasks/${id}`)
}

const addNewTask = (taskDetails: NewTask)=>{
    return axios.post("/tasks",taskDetails)
}


const updateTask = (id: string, taskDetails: UpdateTask)=>{
    return axios.put(`/tasks/${id}`, taskDetails)
}

const deleteTask = (id: string)=>{
    return axios.delete(`/tasks/${id}`)
}


export {
    register,
    getAllTasks,
    getTask,
    addNewTask,
    updateTask,
    deleteTask
}