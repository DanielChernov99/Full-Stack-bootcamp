import { useState } from "react"

export default function InputCard({addNote}){

    const [textInArea,setTextInArea] = useState("")

    const handleAddClick = ()=> {
        const noteValue = textInArea
        addNote()
    }
    const handleChange = (e) => {
        setTextInArea(e.target.value)
    }
         
    

    return (
        <div className="formContainer">
            <h1>QuickNotes</h1>
            <textarea className="inputText" onChange={handleChange} name="inputTextArea" id="inputTextArea"></textarea>
            <button onClick={handleAddClick} type="button">Add</button>

        </div>
    )
    
}