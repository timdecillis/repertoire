import React, { useState } from 'react';

const Notes = ({ setDraftOpen, song }) => {

  return (
    <div>
      <div className="notes-container">
        <div className="notes">{song.notes}</div>
      </div>
      <button className="add-notes" onClick={() => setDraftOpen(true)}>
        Add a note</button>
    </div>
  );
};

export default Notes;