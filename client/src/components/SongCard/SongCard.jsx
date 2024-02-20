import React, { useState } from "react";

import Notes from "../Notes/Notes.jsx";
import Completed from "../Completed/Completed.jsx";

const SongCard = ({ song, authUser, setSongs, setDashOpen }) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);

  return (
    <div>
      {song && (
        <div className="song">
          {!draftOpen ? (
            <div onClick={() => setDraftOpen(true)} className="song-name">
              <div className="song-name-content" >{song.name}</div>
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
      )}
    </div>
  );
};
export default SongCard;