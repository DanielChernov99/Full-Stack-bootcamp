import "../styles/NoteCard.css";
import { LuX } from "react-icons/lu";

export default function NoteCard({deleteNote,note}){
    const dateOfNote= note.date
    const day = dateOfNote.getDate();
    const month = dateOfNote.toLocaleString("en-US", { month: "short" });
    const time = dateOfNote.toLocaleTimeString()
    
    const handleDeleteClick = ()=>{

        let result = confirm("Are you sure you want to delete your note?");
        if(result){
            deleteNote(note)
        }
        
        
    }

    return (
        <div className="note-container">
            {note.title? <h3>{note.title}</h3>:""}
            <p className="note-text">{note.text}</p>
            <div className="note-info-row">          
                <p className="note-date">{month} {day}th {time}</p>
                <button onClick={handleDeleteClick} className="delete-button" type="button">
                    <LuX className="x-icon" />
                </button>
            </div>
            

        </div>
    )
    
}