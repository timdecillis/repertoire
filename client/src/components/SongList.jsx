import React, { useState } from 'react';

import Draft from './Draft.jsx';
import Notes from './Notes.jsx';
import Completed from './Completed.jsx';
import RemoveButton from './RemoveButton.jsx';

const SongList = ({ songs, setSongs, band, deleteSong, handleCompleted, handleNotes, signedIn, authUser }) => {
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
              {/* <div className="artist">by {song.artist}</div>
              <div className="notes-heading">Notes</div>
              {draftOpen ?
                <Draft setDraft={setDraft} setDraftOpen={setDraftOpen} handleNotes={handleNotes} authUser={authUser} draft={draft} song={song} />
                :
                <Notes song={song} setDraftOpen={setDraftOpen} />
              }
              <Completed handleCompleted={handleCompleted} authUser={authUser} song={song}/>
              <RemoveButton deleteSong={deleteSong} authUser={authUser} song={song}/> */}
            </div>
          </div>)}
      </div>}
    </div>
  );
};

export default SongList;