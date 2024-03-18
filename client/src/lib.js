const axios = require("axios");

module.exports = {
  getSongs: (authUser, password) => {
    return axios
      .get("/getSongs", { params: { email: authUser, password } })
      .then(({ data }) => {
        return data;
      });
  },
  addSong: (authUser, song, band) => {
    return axios.post("/addSong", {
      email: authUser,
      song: song,
      artist: band,
    });
  },
  searchSongs: (band, instrument, difficulty) => {
    return axios
      .post("/findBand", {
        band: band,
        instrument: instrument,
        difficulty: difficulty,
      })
      .then(({ data }) => data);
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
    return axios
      .post("/users", { email: email, password: password })
      .then((response) => {
        console.log('response in lib:', response);
      })
      .catch((err) => console.log(err));
  },
};
