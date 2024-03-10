import React, { useState } from "react";

import { deleteSong, completeSong, handleNotes } from "../../lib.js";
import Completed from "../Completed/Completed.jsx";
import Draft from "../Draft/Draft.jsx";

const Notes = ({ setDraftOpen, song, authUser, setSongs }) => {
  const [draft, setDraft] = useState("");
  const [success, setSuccess] = useState(false);
  const [notesInputOpen, setNotesInputOpen] = useState(false);
  const [notes, setNotes] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("these are the notes:", notes);
    setNotesInputOpen(false);
  };

  return (
    <div className="notes">
      <div className="notes-buttons">
        <div className="notes-heading">
          <div>
            <div className="song-title">{song.name}</div>
            <div className="song-artist">by {song.artist}</div>
          </div>
        </div>
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
        <button onClick={() => setNotesInputOpen(true)} className="note-button">
          {song.notes ? "Edit Notes" : "Add Notes"}
        </button>
      </div>
      {song.notes && !notesInputOpen ? (
        <>
          <div className="notes-notes">Notes:</div>
          <div>{song.notes}</div>
        </>
      ) : notesInputOpen ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="notes-buttons notes-notes"
          >
            <textarea
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              onChange={(e) => setNotes(e.target.value)}
              style={{ marginBottom: "0.7em" }}
            ></textarea>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setNotesInputOpen(false)}
                className="note-button"
              >
                Back
              </button>
              <input className="note-button" type="submit" value="Save"></input>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default Notes;
