import "../styles/NoteCard.css";
import { LuX } from "react-icons/lu";

export default function NoteCard({onNoteClick,onDeleteNote,note,shouldConfirmDelete}){
    const dateOfNote= note.date
    const day = dateOfNote.getDate();
    const month = dateOfNote.toLocaleString("en-US", { month: "short" });
    const time = dateOfNote.toLocaleTimeString()
    
    const handleDeleteClick = (e) => {
        e.stopPropagation();

        if (shouldConfirmDelete) {
            const result = confirm("Are you sure you want to delete your note?");

            if (!result) {
                return;
            }
        }

        onDeleteNote(note);
    };

    const handleNoteClick = ()=>{
        onNoteClick(note)
    }

    return (
        <div className="note-container" onClick={handleNoteClick}>
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