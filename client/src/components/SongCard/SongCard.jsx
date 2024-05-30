import React, { useState } from "react";

import { handleNotes } from "../../lib.js";
import Notes from "../Notes/Notes.jsx";
import Completed from "../Completed/Completed.jsx";

const SongCard = ({ song, authUser, setSongs }) => {
  const [draftOpen, setDraftOpen] = useState(false);
  const [notesInputOpen, setNotesInputOpen] = useState(false);
  const [notes, setNotes] = useState(song.notes || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNotes(authUser, song.name, song.artist, notes).then((data) => {
      setNotes(data.data);
      setNotesInputOpen(false);
    });
  };

  // comment

  return (
    <div>
      {song && (
        <div className="song">
          {!draftOpen ? (
            <div onClick={() => setDraftOpen(true)} className="song-name">
              <div className="song-name-content">{song.name}</div>
              {song.completed && (
                <div className="song-name-check">&#10003;</div>
              )}
            </div>
          ) : (
            <Notes
              setNotes={setNotes}
              notesInputOpen={notesInputOpen}
              setNotesInputOpen={setNotesInputOpen}
              notes={notes}
              handleSubmit={handleSubmit}
              setSongs={setSongs}
              authUser={authUser}
              setDraftOpen={setDraftOpen}
              song={song}
              draftOpen={draftOpen}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default SongCard;
