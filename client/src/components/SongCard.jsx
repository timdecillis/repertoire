import React, { useState } from "react";

import Notes from "./Notes.jsx";
import Completed from "./Completed.jsx";
import RemoveButton from "./RemoveButton.jsx";

const SongCard = ({ song, handleCompleted, handleNotes, authUser, deleteSong }) => {
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
          deleteSong={deleteSong}
          authUser={authUser}
          handleNotes={handleNotes}
          setDraftOpen={setDraftOpen}
          song={song}
          draftOpen={draftOpen}
          handleCompleted={handleCompleted}
        />
      )}
    </div>
  );
};

export default SongCard;
