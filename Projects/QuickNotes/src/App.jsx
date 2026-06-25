import { useState } from "react";
import "./styles/App.css";
import InputCard from "./components/InputCard";
import NoteList from "./components/NoteList"


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (noteData)=>{
    if (!noteData.text.trim()) {
      alert("Note must have some text in it")
      return
    }
    const newNote ={
      id: crypto.randomUUID(),
      title:noteData.title,
      text:noteData.text,
      date: new Date()
    }
    setNotes(prevNotes => [...prevNotes,newNote])
  }

  const deleteNote = (noteToDelete) => {
    const newNotes = notes.filter((u) => u.id !== noteToDelete.id);
    setNotes(newNotes);
  };

  return (
    <div className="app">
      
      <InputCard addNote ={addNote} />
      <NoteList deleteNote={deleteNote} notes={notes} />
    </div>
  );
}

export default App;
