import axios from "axios";

interface NewTask {
    title: string
    description : string
    deadline: Date
}

interface UpdateTask extends NewTask {
    status: string
}

const baseURL: string = import.meta.env.VITE_BASE_URL + "/tasks";

const getAllTasks = ()=>{
    return axios.get(`${baseURL}`)
}

const getTask = (id: string)=>{
    return axios.get(`${baseURL}/${id}`)
}

const addNewTask = (taskDetails: NewTask)=>{
    return axios.post(`${baseURL}`,taskDetails)
}


const updateTask = (id: string, taskDetails: UpdateTask)=>{
    return axios.put(`${baseURL}/${id}`, taskDetails)
}

const deleteTask = (id: string)=>{
    return axios.delete(`${baseURL}/${id}`)
}


export {
    getAllTasks,
    getTask,
    addNewTask,
    updateTask,
    deleteTask
}