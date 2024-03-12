import React, { useState } from "react";

import Notes from "../Notes/Notes.jsx";
import Completed from "../Completed/Completed.jsx";

const SongCard = ({ song, authUser, setSongs, setDashOpen }) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNotes(authUser, song.name, song.artist, notes).then((data) => {
      setNotes(data.data);
      setNotesInputOpen(false);
    });
  };

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
