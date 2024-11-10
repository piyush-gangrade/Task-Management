import TaskItem from "./TaskItem"
import { useTask } from "../context/TaskContext"
import { updateTask } from "../api";

interface TaskListType {
    heading: string
    status: string
}

export default function TaskList({heading, status}: TaskListType){
    const {tasks, setTasks} = useTask();

    const handleOnDrop = async(e: React.DragEvent)=>{
        const taskId: string = e.dataTransfer.getData("taskId");
        const dragTask = tasks.find(task => task._id === taskId);
        
        if(!dragTask){
            return;
        }
        try {
            const res = await updateTask(taskId, {
                title: dragTask.title, 
                description: dragTask.description,
                deadline: dragTask.deadline,
                status: status
            })

            if(res?.data?.success){
                setTasks(tasks => tasks.map(task => {
                    if(task._id === taskId){
                        return {
                            ...task,
                            status: status
                        }
                    }
                    else{
                        return task
                    }
                }))
            }
        } 
        catch (error) {
            console.log(error)
        }
    }

    const handleDragOver = (e: React.DragEvent)=>{
        e.preventDefault();
    }

    return (
        <div className="task--list" onDrop={handleOnDrop} onDragOver={handleDragOver}>
            <div className="task--list--heading">{heading}</div>
            {
                tasks
                .filter(task => task.status === status)
                .map(task=>(
                    <TaskItem 
                        key={task._id}
                        _id={task._id}
                        title={task.title}
                        description={task.description}
                        deadline={task.deadline}
                        status = {task.status}
                    />
                ))
            }
        </div>
    )
}