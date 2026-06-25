import { useState } from "react";
import "./styles/App.css";
import InputCard from "./components/InputCard";
import NoteList from "./components/NoteList"


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote)=>{
    setNotes([...notes,newNote])
  }
  return (
    <div className="app">
      
      <InputCard addNote ={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
