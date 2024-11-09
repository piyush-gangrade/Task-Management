

export default function TaskItem(){
    return (
        <div className="task--item">
            <div className="task--header">
                <div className="task--priority">Low</div>
                <div className="task--option">...</div>
            </div>
            <div className="task--heading">Brainstorming</div>
            <div className="task--description">Brainstorming brings team members' diverse experience into play. </div>
            <div className="task--deadline">
                <span className="task--deadline--key">Deadline: </span>
                <span className="task--deadline--value">12/5/24</span>
            </div>
        </div>
    )
}