import { Task } from "../types/Task";

export default function TaskItem({_id, title, description, deadline}: Task){
    const deadlineDate = new Date(deadline);

    const handleOnDrag = (e: React.DragEvent, _id: string)=>{
        e.dataTransfer.setData("taskId", _id);
    }

    return (
        <div className="task--item" draggable onDragStart={(e)=> handleOnDrag(e, _id)}>
            <div className="task--header">
                <div className="task--priority">Low</div>
                <div className="task--option">...</div>
            </div>
            <div className="task--heading">{title}</div>
            <div className="task--description">{description}</div>
            <div className="task--deadline">
                <span className="task--deadline--key">Deadline: </span>
                <span className="task--deadline--value">{deadlineDate.toDateString()}</span>
            </div>
        </div>
    )
}