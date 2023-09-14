import React, { useState } from 'react';

import Draft from './Draft.jsx';

const SongList = ({ songs, setSongs, band, deleteSong, handleCompleted, handleNotes, signedIn, authUser }) => {
  const [notes, setNotes] = useState('');
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState('');

  if (!signedIn) {
    return null;
  }

  return (
    <div className="songlist">
      <div className="your-song">My songbook</div>

      {songs.length > 0 && <div>
        {songs.map((song, i) =>

          <div key={i} className="song-border">
            <div className="song">

              <div className="song-name">{song.name}</div>
              <div className="artist">by {song.artist}</div>

              <div className="notes-heading">Notes</div>

              {draftOpen ? <Draft setDraft={setDraft} setDraftOpen={setDraftOpen} handleNotes={handleNotes} authUser={authUser} draft={draft} song={song}/>

                :
                <div>
                  <div className="notes-container">
                    <div className="notes">{song.notes}</div>
                  </div>

                  <button className="add-notes" onClick={() => setDraftOpen(true)}>
                    Add a note</button>
                </div>
              }


              <div className="completed">
                <input onClick={() =>
                  handleCompleted(authUser, song.name, song.artist)
                } type="checkbox" name="completed" defaultChecked={song.completed}></input>
                <label htmlFor="completed">Completed</label>
              </div>
              <button className="remove-song" onClick={() => {
                deleteSong(authUser, song.name, song.artist);
              }} >Remove song
              </button>
            </div>
          </div>)}
      </div>}
    </div>
  );
};

export default SongList;