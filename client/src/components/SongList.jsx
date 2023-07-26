import React from 'react';

const SongList = ({ songs }) => {
  return (
    <div>
      <h2>Current Songs</h2>
      {songs.length > 0 && <div>{songs.map((song, i) => <div key={i}>{song}</div>)}</div>}
    </div>
  );
};

export default SongList;