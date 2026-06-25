import { useState } from "react";
import "./styles/App.css";
import InputCard from "./components/InputCard";
import NoteList from "./components/NoteList"
import { Modal } from "@mantine/core";
import NoteCard from "./components/NoteCard";


function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  

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

   const handleNoteClick = (note) => {
    setActiveNote(note);
  };

  const closeModal = () => {
    setActiveNote(null);
  };

  return (
    <div className="app">
      <InputCard onAddNote ={addNote} />
      <NoteList onDeleteNote={deleteNote} notes={notes} onNoteClick={handleNoteClick} />
      <Modal
        opened={activeNote !== null}
        onClose={closeModal}
        size="auto"
        withCloseButton={false}
        centered
      >
        {activeNote && (
          <NoteCard
            note={activeNote}
            onDeleteNote={closeModal}
            onNoteClick={() => {}}
            shouldConfirmDelete={false}
          />
        )}
      </Modal>
       
    </div>
  );
}

export default App;
