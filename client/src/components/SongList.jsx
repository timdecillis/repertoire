import React, { useState } from 'react';

const SongList = ({ songs, setSongs, band, deleteSong, handleCompleted, handleNotes }) => {
  const [notes, setNotes] = useState('');
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState('');
  return (
    <div className="songlist">
      <h2>Current Songs</h2>
      {songs.length > 0 && <div>
        {songs.map((song, i) =>
          <div className="song" key={i}>
            <div className="song-name">{song.song.name} by {song.song.artist}</div>
            <input onClick={() =>
              handleCompleted(song.song.name, song.song.artist)
            } type="checkbox" name="completed" defaultChecked={song.completed}></input>
            <label htmlFor="completed">Completed</label>
            <button onClick={() => {
              deleteSong(song.song.name, song.song.artist);
            }} >X
            </button>
            {draftOpen && <div>
              <textarea onChange={(e) => setDraft(e.target.value)} ></textarea>
              <button onClick={() => {
                handleNotes(song.song.name, song.song.artist, draft);
                setDraftOpen(false);
              }}>
                Add</button>
            </div>}
            {!draftOpen &&
              <div>
                <h4>Notes:</h4>
                <div>{song.notes}</div>
                <button onClick={() => setDraftOpen(true)}>
                  Add/Update notes</button>
              </div>
            }
          </div>)}
      </div>}
    </div>
  );
};

export default SongList;