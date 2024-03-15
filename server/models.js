const database = require("./database.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/repertoire");

const repertoireSchema = new mongoose.Schema({
  email: String,
  password: String,
  songs: [],
});

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  completed: { type: Boolean, default: false },
  notes: String,
});

const User = mongoose.model("User", repertoireSchema);

const Song = mongoose.model("Song", songSchema);

module.exports = {
  createUser: (email, password) => {
    return new User({ email: email, password: password }).save();
  },
  saveSong: (req) => {
    let { email, song, artist } = req;
    return User.findOne({ email: email }).then((foundUser) => {
      // if (foundUser.songs.some((s) => s.name === song && s.artist === artist)) {
      //   return foundUser.songs;
      // }
      const newSong = new Song({ name: song, artist });
      foundUser.songs.push(newSong);
      return foundUser.save().then((updatedUser) => {
        return updatedUser.songs;
      });
    });
  },
  getSongs: (email, password) => {
    return User.findOne({ email })
      .exec()
      .then((foundUser) => {
        if (foundUser.password !== password) {
          return 'Incorrect password';
        }
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

  updateSong: async (email, song, artist, completed) => {
    const value = completed;
    try {
      const updatedUser = await User.findOneAndUpdate(
        { email: email, "songs.name": song, "songs.artist": artist },
        { $set: { "songs.$.completed": !completed } },
        { new: true }
      );

      return updatedUser.songs;
    } catch (error) {
      throw error;
    }
  },

  updateNotes: (email, song, artist, notes) => {
    const query = { email: email, "songs.name": song, "songs.artist": artist };
    const update = { $set: { "songs.$.notes": notes } };
    return User.findOneAndUpdate(query, update, { new: true }).then((updatedUser) => {
      const updatedSong = updatedUser.songs.find(s => s.name === song && s.artist === artist);
      return updatedSong.notes;
    });
  },
};
