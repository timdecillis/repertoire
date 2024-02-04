const database = require("./database.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/repertoire");

const repertoireSchema = new mongoose.Schema({
  email: String,
  password: String,
  songs: [],
});

const User = mongoose.model("User", repertoireSchema);

module.exports = {
  createUser: (email, password) => {
    return new User({ email: email, password: password })
      .save()
      .then((data) => console.log("data:", data));
  },
  saveSong: (req) => {
    let { email, song, artist } = req;
    return User.findOne({ email: email }).then((foundUser) => {
      foundUser.songs.push({
        name: song,
        artist: artist,
        completed: false,
        notes: "",
      });
      return foundUser.save().then((updatedUser) => {
        return updatedUser.songs;
      });
    });
  },
  getSongs: (email) => {
    return User.findOne({ email: email })
      .exec()
      .then((foundUser) => {
        console.log("user songs:", foundUser.songs);
        return foundUser;
      });
  },
  deleteSong: (email, song, artist) => {
    return User.findOne({ email: email }).then((foundUser) => {
      foundUser.songs = foundUser.songs.filter(
        (s) => !(s.name === song && s.artist === artist)
      );
      return foundUser.save().then((updatedUser) => {
        return updatedUser.songs;
      });
    });
  },

  updateSong: async (email, song, artist) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { email: email, "songs.name": song, "songs.artist": artist },
        { $set: { "songs.$.completed": { $ne: "$songs.$.completed" } } },
        { new: true }
      );

      if (!updatedUser) {
        console.log("User not found");
        return null;
      }

      console.log('Updated songs:', updatedUser.songs);

      return updatedUser.songs;
    } catch (error) {
      console.error("Error updating song:", error);
      throw error;
    }
  },

  updateNotes: (email, song, artist, notes) => {
    const query = { email: email, "songs.name": song, "songs.artist": artist };
    const update = { $set: { "songs.$.notes": notes } };
    return User.findOneAndUpdate(query, update, { new: true });
  },
};
