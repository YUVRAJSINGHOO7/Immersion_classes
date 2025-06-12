import React from 'react';

function Note({ text, onDoubleClick }) {
  return (
    <div className="note-box" onDoubleClick={onDoubleClick}>
      {text}
    </div>
  );
}

export default Note;
