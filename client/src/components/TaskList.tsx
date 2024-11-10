import TaskItem from "./TaskItem"
import { useTask } from "../context/TaskContext"

interface TaskListType {
    heading: string
    status: string
}

export default function TaskList({heading, status}: TaskListType){
    const {tasks} = useTask();

    return (
        <div className="task--list">
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