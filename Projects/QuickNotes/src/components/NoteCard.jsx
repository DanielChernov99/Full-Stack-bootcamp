
export default function NoteCard({note}){

    return (
        <div className="note-container">
            <p className="note-text">{note.text}</p>
        </div>
    )
    
}