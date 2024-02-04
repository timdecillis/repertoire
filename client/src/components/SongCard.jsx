import React, { useState } from "react";

import Notes from "./Notes.jsx";
import Completed from "./Completed.jsx";

const SongCard = ({
  song,
  authUser,
  setSongs,
  setDashOpen,
}) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);

  return (
    <div className="song">
      {!draftOpen ? (
        <div onClick={() => setDraftOpen(true)} className="song-name">
          <div>{song.name}</div>
          {song.completed && <div>&#10003;</div>}
        </div>
      ) : (
        <Notes
          setSongs={setSongs}
          authUser={authUser}
          setDraftOpen={setDraftOpen}
          song={song}
          draftOpen={draftOpen}
        />
      )}
    </div>
  );
};

export default SongCard;
