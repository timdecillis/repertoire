const axios = require("axios");

export const getSongs = (authUser) => {
  return axios
    .get("/getSongs", { params: { email: authUser } })
    .then(({ data }) => {
      return data;
    });
};

export const addSong = (authUser, song, band) => {
  return axios.post("/addSong", { email: authUser, song: song, artist: band });
};
