import { useState } from "react";
import "./styles/App.css";
import InputCard from "./components/InputCard";
import NoteList from "./components/NoteList"
import { Modal } from "@mantine/core";
import EditNoteForm from "./components/EditNoteForm";


function App() {
  const [notes, setNotes] = useState(loadFromLocaleStorage);
  const [activeNote, setActiveNote] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const CATEGORIES = [
    { value: "personal", label: "Personal" },
    { value: "work", label: "Work" },
    { value: "study", label: "Study" },
    { value: "other", label: "Other" },
  ];
  

  function  loadFromLocaleStorage(){
    try {
      const savedNotes = localStorage.getItem("Notes")
      if(!savedNotes){
        return []
      }
      return JSON.parse(savedNotes)
      
    } catch (error) {
        alert("something went wrong loading from Locale Storage")
        return []
    }
  }
  const saveNotes = (newNotes) => {
    setNotes(newNotes);
    localStorage.setItem("Notes", JSON.stringify(newNotes));
  };


  const addNote = (noteData)=>{
    if (!noteData.text.trim()) {
      alert("Note must have some text in it")
      return
    }
    const newNote ={
      id: crypto.randomUUID(),
      title:noteData.title,
      text:noteData.text,
      category: noteData.category || "personal ",
      date: new Date()
    }
    const newNotes = [...notes, newNote];
    saveNotes(newNotes);
  }

  const deleteNote = (noteToDelete) => {
    const newNotes = notes.filter((u) => u.id !== noteToDelete.id);
    saveNotes(newNotes);
  };

  const updateNote = (noteToUpdate) => {
    if (!noteToUpdate.text.trim()) {
      alert("Note must have some text in it");
      return;
    }

    const newNotes = notes.map((note) =>
      note.id === noteToUpdate.id
        ? {
            ...note,
            title: noteToUpdate.title,
            text: noteToUpdate.text,
            category: noteToUpdate.category || "personal",
            updatedAt: new Date()
          }
        : note
    );

saveNotes(newNotes);

    setActiveNote(null);
  };

   const handleNoteClick = (note) => {
    setActiveNote(note);
  };

  const closeModal = () => {
    setActiveNote(null);
  };

  const fillteredNotes = notes.filter(n => {
      const search = searchText.trim().toLowerCase()
      const titleMatches = n.title?.toLowerCase().includes(search)
      const textMatches =  n.text?.toLowerCase().includes(search)

      const noteCategory = n.category?? "personal"
      const categoryMatches = selectedCategory==="all" || noteCategory === selectedCategory

      return (titleMatches || textMatches) && categoryMatches;
  })

  

  return (
    <div className="app">
      <InputCard onAddNote={addNote} categories={CATEGORIES} />
        <input
          type="text"
          placeholder="Search notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      <div className="category-filter-row">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        {CATEGORIES.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <NoteList onDeleteNote={deleteNote} notes={fillteredNotes} onNoteClick={handleNoteClick} categories={CATEGORIES} />
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
            categories={CATEGORIES}
          />
        )}
      </Modal>
       
    </div>
  );
}

export default App;
