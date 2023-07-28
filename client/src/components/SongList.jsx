import React, { useState } from 'react';

const SongList = ({ songs, setSongs, band, deleteSong, handleCompleted, handleNotes }) => {
  const [notes, setNotes] = useState('');
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState('');
  return (
    <div className="songlist">
      <h3 className="your-song">Your Songs</h3>
      {songs.length > 0 && <div>
        {songs.map((song, i) =>
          <div className="song-border">
            <div className="song" key={i}>

              <div className="song-name">{song.song.name}</div>
              <div className="artist">by {song.song.artist}</div>


              <div className="notes-heading">Notes</div>
              {draftOpen && <div className="draft">
                <textarea onChange={(e) => setDraft(e.target.value)} ></textarea>
                <div>
                  <button className="draft-buttons" onClick={() => setDraftOpen(false)} >cancel</button>
                  <button className="draft-buttons" onClick={() => {
                    handleNotes(song.song.name, song.song.artist, draft);
                    setDraftOpen(false);
                  }}>
                    add</button>
                </div>
              </div>}

              {!draftOpen &&
                <div>
                  <div className="notes-container">
                    <div className="notes">{song.notes}</div>
                  </div>

                  <button className="add-notes" onClick={() => setDraftOpen(true)}>
                    Add/Update</button>
                </div>
              }
              <div className="completed">
                <input onClick={() =>
                  handleCompleted(song.song.name, song.song.artist)
                } type="checkbox" name="completed" defaultChecked={song.completed}></input>
                <label htmlFor="completed">Completed</label>
              </div>
              <button className="remove-song" onClick={() => {
                deleteSong(song.song.name, song.song.artist);
              }} >Remove song
              </button>
            </div>
          </div>)}
      </div>}
    </div>
  );
};

export default SongList;