import React, { useState } from "react";

import Draft from "./Draft.jsx";
import Notes from "./Notes.jsx";
import Completed from "./Completed.jsx";
import SongCard from "./SongCard.jsx";

const SongList = ({
  songs,
  setSongs,
  band,
  signedIn,
  authUser,
  dashOpen,
  setDashOpen,
}) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState("");

  return (
    <div className="songlist">
      <div className="songlist-heading">
        <div className="your-song">Songbook</div>
        <span
          onClick={() => setDashOpen(true)}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "1.5em",
          }}
        >
          +Add Song
        </span>
      </div>

      {songs.length > 0 && (
        <div>
          {songs.map((song, i) => (
            <SongCard
              setSongs={setSongs}
              authUser={authUser}
              key={i}
              song={song}
              setDashOpen={setDashOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;
