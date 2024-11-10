import { useState } from "react"
import TaskList from "./TaskList"
import AddTask from "./AddTask";

export default function TaskContainer(){
    const [openAddTask, isOpenAddTask] = useState<boolean>(false);

    return (
        <div className="task--container">
            {openAddTask && <AddTask close={()=>{isOpenAddTask(false)}}/>}
            <div className="task--sidebar">
                <div className="task--status">Expired Task</div>
                <div className="task--status">All Active Task</div>
                <div className="task--status">Completed Task</div>
                <button className="add--task--btn" onClick={()=>{isOpenAddTask(true)}}>Add Task</button>
            </div>
            <TaskList heading="To Do" status="pending"/>
            <TaskList heading="In Process" status="in-process"/>
            <TaskList heading="Completed" status="completed"/>
        </div>
    )
}