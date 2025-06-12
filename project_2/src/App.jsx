import React, { useState } from 'react';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input.trim()]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addNote();
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a note..."
        />
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes">
        {notes.map((note, index) => (
          <Note key={index} text={note} onDoubleClick={() => removeNote(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
