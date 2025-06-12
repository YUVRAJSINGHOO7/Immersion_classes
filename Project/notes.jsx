import React, { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const removeNote = (indexToRemove) => {
    setNotes(notes.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">📝 Notes App</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="flex-grow p-2 border border-gray-300 rounded"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a note"
          />
          <button
            onClick={addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li
              key={index}
              onDoubleClick={() => removeNote(index)}
              className="p-3 bg-yellow-100 rounded cursor-pointer hover:bg-yellow-200"
              title="Double-click to delete"
            >
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
