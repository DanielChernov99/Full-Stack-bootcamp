import { useState } from "react"
import "../styles/InputCard.css";

export default function InputCard({addNote}){

    const [textInArea,setTextInArea] = useState("")

    const handleAddClick = ()=> {
        const noteValue = textInArea
        addNote(noteValue)
        setTextInArea("")
    }
    const handleChange = (e) => {
        setTextInArea(e.target.value)
    }
         
    

    return (
        <div className="formContainer">
            <h1>QuickNotes</h1>
            <textarea value={textInArea} className="inputText" onChange={handleChange} id="inputTextArea"></textarea>
            <button onClick={handleAddClick} type="button">Add</button>

        </div>
    )
    
}