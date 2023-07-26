import React, { useState } from 'react';

const SongList = ({ songs, setSongs }) => {
  const [notes, setNotes] = useState('');
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState('');
  return (
    <div>
      <h2>Current Songs</h2>
      {songs.length > 0 && <div>
        {songs.map((song, i) =>
          <div key={i}>
            <div>{song}</div>
            <input type="checkbox" name="completed"></input>
            <label htmlFor="completed">Completed</label>
            <button onClick={() => {
              let array = songs.filter(tune => tune !== song);
              setSongs(array);
            }} >X
            </button>
            {draftOpen && <div>
              <textarea onChange ={(e) => setDraft(e.target.value)} ></textarea>
              <button onClick={() => {
                setNotes(draft);
                setDraftOpen(false);
              }}>
                Add</button>
            </div>}
            {!draftOpen &&
              <div>
                <div>{notes}</div>
                <button onClick={() => setDraftOpen(true)}>
                  Add/Update</button>
              </div>
            }
          </div>)}
      </div>}
    </div>
  );
};

export default SongList;