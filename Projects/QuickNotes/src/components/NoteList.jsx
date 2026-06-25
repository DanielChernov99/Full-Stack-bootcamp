import NoteCard from "./NoteCard";
import "../styles/NoteList.css";

export default function NoteList({ notes ,onDeleteNote}) {
  return (
    <div className="note-list">
      {notes.map((n) => (
        <NoteCard key={n.id} note={n} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}