const database = require('./database.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/repertoire');

const repertoireSchema = new mongoose.Schema({
  song: {name: String, artist: String},
  completed: Boolean,
  notes: String
});

const Song = mongoose.model('Song', repertoireSchema);

module.exports = {
  saveSong: (song) => {
    return new Song({
      song: {name: song.song, artist: song.artist},
      completed: false,
      notes: ''
    }).save();
  },
  getSongs: () => {
    return Song.find({})
      .exec();
  },
  deleteSong: (song, artist) => {
    return Song.findOneAndRemove({ 'song.name': song, 'song.artist': artist })
      .exec();
  },
  updateSong: (song, artist) => {
    return Song.findOne({ 'song.name': song, 'song.artist': artist })
      .then((foundSong) => {
        foundSong.completed = !foundSong.completed;
        return foundSong.save();
      });
  },
  updateNotes: (song, artist, notes) => {
    return Song.findOne({ 'song.name': song, 'song.artist': artist })
      .then((foundSong) => {
        console.log(notes)
        foundSong.notes = notes;
        return foundSong.save();
      });
  }
};