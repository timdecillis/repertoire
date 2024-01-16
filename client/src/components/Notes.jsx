import React, { useState } from "react";
import RemoveButton from './RemoveButton.jsx';
import Completed from './Completed.jsx';
import Draft from './Draft.jsx';

const Notes = ({ setDraftOpen, song, draftOpen, handleCompleted, authUser, deleteSong, handleNotes }) => {

  const [draft, setDraft] = useState('');

  return (
    <div className="notes">
      <div className="artist">{song.name}</div>
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

      </div>
      <button className="add-notes" onClick={() => setDraftOpen(true)}>
        Add a note
      </button>
      <button onClick={() => setDraftOpen(false)}>Close</button>
    </div>
  );
};

export default Notes;
