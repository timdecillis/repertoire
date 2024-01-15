import React, { useState } from "react";

import Draft from "./Draft.jsx";
import Notes from "./Notes.jsx";
import Completed from "./Completed.jsx";
import RemoveButton from "./RemoveButton.jsx";

const SongCard = ({ song }) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState("");

  return (
    <div className="song-border">
      {!draftOpen ? (
        <div className="song">
          <div className="song-name">{song.name}</div>
          <div className="song-name">&#10003;</div>
        </div>
      ) : (
        <Draft />
      )}
    </div>
  );
};

export default SongCard;
