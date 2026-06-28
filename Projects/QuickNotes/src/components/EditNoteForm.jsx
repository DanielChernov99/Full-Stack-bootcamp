import { useState } from 'react';
import "../styles/InputCard.css";

export default function EditNoteForm({ note, onUpdateNote, categories }) {
  const [formData, setFormData] = useState({
    title: note.title ?? "",
    text: note.text ?? "",
    category: note.category ?? "personal"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateClick = () => {
    onUpdateNote({
      ...note,
      title: formData.title,
      text: formData.text,
      category: formData.category
    });
  };

  return (
    <div className='formContainer'>
      <input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Note Title"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        {categories.map(catg => (
          <option key={catg.value} value={catg.value}>
            {catg.label}
          </option>
        ))}
      </select>

      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Write your note here"
        className="inputText"
      />

      <button onClick={handleUpdateClick} type="button">
        Update
      </button>
    </div>
  );
}