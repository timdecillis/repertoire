import React, { useState, useContext, useEffect, useRef } from "react";

import { deleteSong, completeSong, handleNotes } from "../../lib.js";
import Draft from "../Draft/Draft.jsx";
import { DataContext } from "../../context.js";

const Notes = ({
  setDraftOpen,
  song,
  handleSubmit,
  notes,
  setNotesInputOpen,
  notesInputOpen,
  setNotes,
}) => {
  const [draft, setDraft] = useState("");
  const [success, setSuccess] = useState(false);
  const textareaRef = useRef(null);

  const { user, password, setSongs } = useContext(DataContext);

  useEffect(() => {
    if (notesInputOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [notesInputOpen]);

  const handleCompleted = () => {
    completeSong(user, song.name, song.artist, song.completed).then(
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
    deleteSong(user, song.name, song.artist).then(({ data }) => {
      setDraftOpen(false);
      setSongs(data);
    });
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
        </div>
        <button onClick={handDeleted} className="note-button">
          Delete Song
        </button>
        <button className="note-button" onClick={() => setDraftOpen(false)}>
          Back
        </button>
        <button onClick={() => setNotesInputOpen(true)} className="note-button">
          {notes ? "Edit Notes" : "Add Notes"}
        </button>
      </div>
      {notes && !notesInputOpen ? (
        <div
          className="notes-notes"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ borderBottom: "solid", borderBottomWidth: ".1em" }}>
            Notes
          </div>
          <div>{notes}</div>
        </div>
      ) : notesInputOpen ? (
        <>
          <form onSubmit={handleSubmit} className="notes-buttons notes-notes">
            <textarea
              ref={textareaRef}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              onChange={(e) => setNotes(e.target.value)}
              style={{ marginBottom: "0.7em", width: "99%" }}
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
      {success && (
        <div style={{ fontSize: ".8em", marginLeft: ".5em" }}>Song upated!</div>
      )}
    </div>
  );
};

export default Notes;
