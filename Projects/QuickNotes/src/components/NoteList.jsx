
import NoteCard from "./NoteCard"

export default function NoteList({notes}){
    
    return (
        notes.map(n => <NoteCard key={n.id} note = {n} />)
    )
}