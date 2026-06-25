import { useState } from "react"
import "../styles/InputCard.css";

export default function InputCard({addNote}){

    const [areaText,setAreaText] = useState("")
    const [titleText,setTitleText] = useState("")

    const handleAddClick = ()=> {
        const noteValue = areaText
        addNote({
            title: titleText,
            text: areaText
        });
        setAreaText("")
        setTitleText("")
    }
    const handleTextAreaChange = (e) => {
        setAreaText(e.target.value)
    }
    const handleTitleChange = (e) => {
        setTitleText(e.target.value)
    }
         
    

    return (
        <div className="formContainer">
            <h1>QuickNotes</h1>
            <input value={titleText} onChange={handleTitleChange} placeholder="Note Title" type="text" />
            <textarea placeholder="Write your new idea here" value={areaText} className="inputText" onChange={handleTextAreaChange} ></textarea>
            <button onClick={handleAddClick} type="button">Add</button>

        </div>
    )
    
}