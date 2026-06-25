import { useState } from "react"
import "../styles/InputCard.css";

export default function InputCard({addNote}){

    const [formData,setFormData] = useState({
        title:"",
        text:""
    })

    const handleAddClick = ()=> {
        addNote({
            title: formData.title,
            text: formData.text
        });
        setFormData({
            title:"",
            text:""
        })
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
       
    return (
        <div className="formContainer">
            <h1>QuickNotes</h1>
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Note Title" type="text" />
            <textarea name="text" placeholder="Write your new idea here" value={formData.text} className="inputText" onChange={handleChange} ></textarea>
            <button onClick={handleAddClick} type="button">Add</button>

        </div>
    )
    
}