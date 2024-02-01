const axios = require("axios");

module.exports = {
  getSongs: (authUser) => {
    return axios
      .get("/getSongs", { params: { email: authUser } })
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
  searchSongs: () => {
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
};
