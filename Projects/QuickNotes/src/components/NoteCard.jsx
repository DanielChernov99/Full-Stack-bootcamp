import "../styles/NoteCard.css";

export default function NoteCard({note}){
    const dateOfNote= note.date
    const day = dateOfNote.getDate();
    const month = dateOfNote.toLocaleString("en-US", { month: "short" });
    const time = dateOfNote.toLocaleTimeString()
    

    return (
        <div className="note-container">
            <p className="note-text">{note.text}</p>
            <p className="note-date">{month} {day}th {time}</p>
                
            
        </div>
    )
    
}