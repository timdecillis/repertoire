const axios = require('axios');

export const getSongs = (authUser) => {
  return axios
    .get("/getSongs", { params: { email: authUser } })
    .then(({ data }) => {
      return data;
    });
};