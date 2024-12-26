import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Task } from "../types/Task";
import { getAllTasks } from "../api";

interface TaskContextType {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    getTasks: ()=>void
}

const TaskContext = createContext<TaskContextType | null>(null);

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context;
};

interface TaskProviderProps {
    children: ReactNode;
}

export default function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasks = async()=>{
        const res = await getAllTasks();
        // console.log(res);
        if (res?.data?.success) {
            setTasks(res.data.response);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);
    // console.log(tasks)
    return (
        <TaskContext.Provider value={{ tasks, setTasks, getTasks}}>
            {children}
        </TaskContext.Provider>
    );
}
