import React, { useState } from "react";
import RemoveButton from './RemoveButton.jsx';

const Notes = ({ setDraftOpen, song }) => {
  return (
    <div>
      <div className="artist">by {song.artist}</div>
      <div className="notes-heading">Notes</div>
      {draftOpen ? (
        <Draft
          setDraft={setDraft}
          setDraftOpen={setDraftOpen}
          handleNotes={handleNotes}
          authUser={authUser}
          draft={draft}
          song={song}
        />
      ) : (
        <Notes song={song} setDraftOpen={setDraftOpen} />
      )}
      <Completed
        handleCompleted={handleCompleted}
        authUser={authUser}
        song={song}
      />
      <RemoveButton deleteSong={deleteSong} authUser={authUser} song={song} />
      <div className="notes-container">
        <div className="notes">{song.notes}</div>
      </div>
      <button className="add-notes" onClick={() => setDraftOpen(true)}>
        Add a note
      </button>
    </div>
  );
};

export default Notes;
