import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

import { getSongs } from "../../lib.js";
import Draft from "../Draft/Draft.jsx";
import Notes from "../Notes/Notes.jsx";
import Completed from "../Completed/Completed.jsx";
import SongCard from "../SongCard/SongCard.jsx";

export const loader = async ({ params }) => {
  const songs = await getSongs(params.email, params.password);
  const theseSongs = songs.data.songs;
  return theseSongs || [];
};

const SongList = ({
  songDuplicate,
  setSongs,
  band,
  signedIn,
  authUser,
  dashOpen,
  setDashOpen,
}) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const songs = useLoaderData();

  return (
    <div className="songlist">
      <div className="songlist-heading">
        <div className="your-song">Songbook</div>
        {songDuplicate && <div>Song already exists on list, skipping...</div>}
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
      <Outlet />

      {songs.length > 0 && (
        <div>
          {songs.map((song, i) => (
            <SongCard
              setSongs={setSongs}
              authUser={authUser}
              key={i}
              song={song}
              setDashOpen={setDashOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;
