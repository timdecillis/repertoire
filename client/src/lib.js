export const getSongs = (authUser) => {
  return axios
    .get("/getSongs", { params: { email: authUser } })
    .then(({ data }) => {
      setSongs(data);
    });
};