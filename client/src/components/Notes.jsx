import React, { useState } from "react";

import {deleteSong} from '../lib.js';
import RemoveButton from "./RemoveButton.jsx";
import Completed from "./Completed.jsx";
import Draft from "./Draft.jsx";

const Notes = ({
  setDraftOpen,
  song,
  handleCompleted,
  authUser,
  handleNotes,
}) => {
  const [draft, setDraft] = useState("");
  const [success, setSuccess] = useState(false);

  const handCompleted = () => {
    handleCompleted(authUser, song.name, song.artist);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  };

  const handDeleted = () => {

    deleteSong(authUser, song.name, song.artist);
    setDraft(false);
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
          <button onClick={handCompleted} className="note-button">
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
      </div>
    </div>
  );
};

export default Notes;
