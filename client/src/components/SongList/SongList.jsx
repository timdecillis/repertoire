import { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import Draft from "../Draft/Draft.jsx";
import Notes from "../Notes/Notes.jsx";
import Completed from "../Completed/Completed.jsx";
import SongCard from "../SongCard/SongCard.jsx";
import { DataContext } from "../../context.js";

const SongList = () => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const { dupe, user, password, songs } = useContext(DataContext);

  return (
    <div className="songlist">
      <div className="songlist-heading">
        <div className="your-song">Songbook</div>
        {dupe && <div>Song already exists on list, skipping...</div>}
        <Link
          to="search"
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "1.5em",
            color: "black",
          }}
        >
          +Add Song
        </Link>
      </div>
      <Outlet dupe={dupe} />

      {songs.length > 0 && (
        <div>
          {songs.map((song, i) => (
            <SongCard authUser={user} key={i} song={song} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;
