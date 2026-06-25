import { useState } from "react";
import "./styles/App.css";
import InputCard from "./components/InputCard";
import NoteList from "./components/NoteList"


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNoteText)=>{
    if (!newNoteText.trim()) return
    const newNote ={
      id: crypto.randomUUID(),
      text:newNoteText,
      date: new Date()
    }
    setNotes(prevNotes => [...prevNotes,newNote])
  }
  return (
    <div className="app">
      
      <InputCard addNote ={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
