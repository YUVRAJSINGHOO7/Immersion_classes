import React from 'react';

function Note({ text, onDoubleClick }) {
  return (
    <div className="note" onDoubleClick={onDoubleClick}>
      {text}
    </div>
  );
}

export default Note;
