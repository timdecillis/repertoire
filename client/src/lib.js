const axios = require("axios");

module.exports = {
  getSongs: (authUser, password) => {
    return axios.get("/getSongs", { params: { email: authUser, password } });
  },
  addSong: (authUser, song, band) => {
    return axios.post("/addSong", {
      email: authUser,
      song: song,
      artist: band,
    });
  },
  searchSongs: (band, instrument, difficulty) => {
    return axios.post("/findBand", {
      band: band,
      instrument: instrument,
      difficulty: difficulty,
    });
  },
  deleteSong: (authUser, song, artist) => {
    return axios.delete("/deleteSong", {
      data: { email: authUser, song: song, artist: artist },
    });
  },
  handleNotes: (authUser, song, artist, notes) => {
    return axios.put("/updateNotes", {
      email: authUser,
      song: song,
      artist: artist,
      notes: notes,
    });
  },
  completeSong: (authUser, song, artist, completed) => {
    return axios.put("/updateSong", {
      email: authUser,
      song,
      artist,
      completed,
    });
  },
  createUser: (email, password) => {
    return axios.post("/users", { email: email, password: password });
  },
  updateUser: (updateType, data) => {
    return axios.post("/updateUser", { updateType, data });
  },
};
