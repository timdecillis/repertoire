import React, { useState } from 'react';

const Draft = ({ setDraft, setDraftOpen, handleNotes, authUser, draft, song }) => {

  return (
    <div className="draft">
      {/* <textarea onChange={(e) => setDraft(e.target.value)} ></textarea>
      <div>
        <button className="draft-buttons" onClick={() => setDraftOpen(false)} >cancel</button>
        <button className="draft-buttons" onClick={() => {
          handleNotes(authUser, song.name, song.artist, draft);
          setDraftOpen(false);
        }}>
          add</button>
      </div> */}
    </div>
  );
};

export default Draft;