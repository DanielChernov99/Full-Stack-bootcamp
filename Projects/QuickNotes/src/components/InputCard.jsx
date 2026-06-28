import { useState } from "react"
import "../styles/InputCard.css";

export default function InputCard({onAddNote ,categories}){

    const [formData,setFormData] = useState({
        title:"",
        text:"",
        category: "personal"
    })

    const handleAddClick = ()=> {
        onAddNote({
            title: formData.title,
            text: formData.text,
            category: formData.category
        });
        setFormData({
            title:"",
            text:"",
            category: "personal"
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
            <select name="category" value={formData.category} onChange={handleChange}>
                {categories.map(catg => (
                    <option key={catg.value} value={catg.value}>
                        {catg.label}
                    </option>
                )

                )}
            </select>
            <textarea name="text" placeholder="Write your new idea here" value={formData.text} className="inputText" onChange={handleChange} ></textarea>
            <button onClick={handleAddClick} type="button">Add</button>

        </div>
    )
    
}