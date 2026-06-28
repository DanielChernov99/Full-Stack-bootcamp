import { useState } from "react";
import "./styles/App.css";
import InputCard from "./components/InputCard";
import NoteList from "./components/NoteList"
import { Modal } from "@mantine/core";
import EditNoteForm from "./components/EditNoteForm";


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

  const updateNote = (noteToUpdate) => {
    if (!noteToUpdate.text.trim()) {
      alert("Note must have some text in it");
      return;
    }

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteToUpdate.id
          ? {
              ...note,
              title: noteToUpdate.title,
              text: noteToUpdate.text,
              updatedAt: new Date()
            }
          : note
      )
    );

    setActiveNote(null);
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
          <EditNoteForm
            note={activeNote}
            onUpdateNote={updateNote}
          />
        )}
      </Modal>
       
    </div>
  );
}

export default App;
