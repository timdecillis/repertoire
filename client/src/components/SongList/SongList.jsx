import React, { useState, useContext } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

import { getSongs } from "../../lib.js";
import Draft from "../Draft/Draft.jsx";
import Notes from "../Notes/Notes.jsx";
import Completed from "../Completed/Completed.jsx";
import SongCard from "../SongCard/SongCard.jsx";
import { DataContext } from "../../context.js";

export const loader = async ({ params }) => {
  const user = params.email;
  const data = await getSongs(params.email, params.password);
  const songs = data.data.songs;
  return { songs: songs || [], user };
};

const SongList = ({ band, signedIn, authUser }) => {
  const [notes, setNotes] = useState("");
  const [draftOpen, setDraftOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const { songs, user } = useLoaderData();
  const { dupe } = useContext(DataContext);

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
            <SongCard authUser={authUser} key={i} song={song} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;
