import { useState } from "react";
import DatePicker from "./DatePicker";

interface Props {
    close: ()=>void;
}

export default function AddTask({close}: Props){
    const [isSubmit, setIsSubmit] = useState<Boolean>(false)
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [date, setDate] = useState<Date>(new Date());

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault;
        setIsSubmit(true);
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }

    const handleDesChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setDescription(e.target.value)
    }

    const onBackClick = ()=>{
        setIsSubmit(false);
        close();
    }

    return (
        <>
            {!isSubmit? <div className="add--task">
                <div className="add--task--heading">ADD TASK</div>
                <form className="add--task--content" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        className="add--task--title"
                        placeholder="Enter task title "
                        required
                    />
                    <textarea 
                        className="add--task--description" 
                        rows={10} 
                        value={description} 
                        onChange={handleDesChange}
                        required
                    >
                    </textarea>
                    <div className="add--task--buttons">
                        <DatePicker value={date} onChange={setDate}/>
                        <button className="assign--btn">Assigned to</button>
                    </div>
                </form>
            </div>
            :
            <div className="add--task">
                <div className="back--content">new task has been created successfully</div>
                <button onClick={onBackClick} className="back-btn">Back</button>
            </div>}
        </>
    )
}