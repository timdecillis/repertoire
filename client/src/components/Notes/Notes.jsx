import React, { useState } from "react";

import { deleteSong, completeSong } from "../../lib.js";
import Completed from "../Completed/Completed.jsx";
import Draft from "../Draft/Draft.jsx";

const Notes = ({ setDraftOpen, song, authUser, setSongs }) => {
  const [draft, setDraft] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCompleted = () => {
    completeSong(authUser, song.name, song.artist, song.completed).then(
      ({ data }) => {
        setSongs(data);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1500);
      }
    );
  };

  const handDeleted = () => {
    deleteSong(authUser, song.name, song.artist).then(({ data }) => {
      setDraftOpen(false);
      setSongs(data);
    });
  };

  return (
    <div className="notes">
      <div className="notes-heading">
        <div>
          <div className="song-title">{song.name}</div>
          <div className="song-artist">by {song.artist}</div>
        </div>
      </div>

      <div className="notes-buttons">
        <div style={{ display: "flex" }}>
          <button onClick={handleCompleted} className="note-button">
            {!song.completed ? "Mark Completed" : "Mark Uncompleted"}
          </button>
          {success && (
            <div style={{ fontSize: ".8em", marginLeft: ".5em" }}>
              Song upated!
            </div>
          )}
        </div>
        <button onClick={handDeleted} className="note-button">
          Delete Song
        </button>
        <button className="note-button" onClick={() => setDraftOpen(false)}>
          Back
        </button>
        <button className="note-button">
          {song.notes ? "Edit Notes" : "Add Notes"}
        </button>
      </div>
    </div>
  );
};

export default Notes;
