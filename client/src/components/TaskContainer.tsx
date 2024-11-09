import React from "react"
import TaskList from "./TaskList"

export default function TaskContainer(){
    return (
        <div className="task--container">
            
            <div className="task--sidebar">
                <div className="task--status">Expired Task</div>
                <div className="task--status">All Active Task</div>
                <div className="task--status">Completed Task</div>
                <button className="add--task">Add Task</button>
            </div>
            <TaskList/>
            <TaskList/>
            <TaskList/>
        </div>
    )
}