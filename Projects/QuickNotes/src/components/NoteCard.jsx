import "../styles/NoteCard.css";
import { LuX } from "react-icons/lu";

export default function NoteCard({onNoteClick,onDeleteNote,note,shouldConfirmDelete}){
    const formatDate = (date) => {
        const dateObj = new Date(date);

        const day = dateObj.getDate();
        const month = dateObj.toLocaleString("en-US", { month: "short" });
        const time = dateObj.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });

        return `${month} ${day}th ${time}`;
    };
    
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
                <div>
                    <p className="note-date">
                        Created: {formatDate(note.date)}
                    </p>

                    {note.updatedAt && (
                        <p className="note-date">
                            Last edited: {formatDate(note.updatedAt)}
                        </p>
                    )}
                </div>
                <button onClick={handleDeleteClick} className="delete-button" type="button">
                    <LuX className="x-icon" />
                </button>
            </div>
            

        </div>
    )
    
}