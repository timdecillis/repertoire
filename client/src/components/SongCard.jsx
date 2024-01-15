import React, { useState } from 'react';

import Draft from './Draft.jsx';
import Notes from './Notes.jsx';
import Completed from './Completed.jsx';
import RemoveButton from './RemoveButton.jsx';

const SongCard = ({ songs, setSongs, band, deleteSong, handleCompleted, handleNotes, signedIn, authUser }) => {
  const [notes, setNotes] = useState('');
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState('');

  if (!signedIn) {
    return null;
  }

  return (
    <div className="songlist">
      <div className="your-song">Songbook</div>

      {songs.length > 0 && <div>
        {songs.map((song, i) =>
          <div key={i} className="song-border">
            <div className="song">
              <div className="song-name">{song.name}</div>

              <div className="song-name">&#10003;</div>
              <Notes/>


            </div>
          </div>)}
      </div>}
    </div>
  );
};

export default SongCard;