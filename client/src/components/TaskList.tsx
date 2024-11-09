import React from "react"
import TaskItem from "./TaskItem"

export default function TaskList(){
    return (
        <div className="task--list">
            <div className="task--list--heading">To Do</div>
            <TaskItem />
        </div>
    )
}