import React, { useState } from "react";

import Draft from "./Draft.jsx";
import Notes from "./Notes.jsx";
import Completed from "./Completed.jsx";
import RemoveButton from "./RemoveButton.jsx";
import SongCard from "./SongCard.jsx";

const SongList = ({
  songs,
  setSongs,
  band,
  deleteSong,
  handleCompleted,
  handleNotes,
  signedIn,
  authUser,
}) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState("");

  if (!signedIn) {
    return null;
  }

  return (
    <div className="songlist">
      <div className="songlist-heading">
        <div className="your-song">Songbook</div>
        <span style={{textDecoration: 'underline'}} >+Add a Song</span>
      </div>

      {songs.length > 0 && (
        <div>
          {songs.map((song, i) => (
            <SongCard />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;
