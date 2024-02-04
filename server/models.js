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
    return new User({ email: email, password: password })
      .save()
      .then((data) => console.log("data:", data));
  },
  saveSong: (req) => {
    let { email, song, artist } = req;
    return User.findOne({ email: email }).then((foundUser) => {
      const newSong = new Song({ name: song, artist });
      foundUser.songs.push(newSong);
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
      const user = await User.findOne({ email: email });

      if (!user) {
        console.log("User not found");
        return null;
      }

      const updatedSongs = user.songs.map((s) => {
        if (s.name === song && s.artist === artist) {
          s.completed = !s.completed;
        }
        return s;
      });

      user.songs = updatedSongs;
      const updatedUser = await user.save();

      console.log("Updated songs:", updatedUser.songs);

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
