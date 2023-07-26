

const database = require('./database.js');

module.exports = {
  get: () => {},
  post: () => {}
};

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fetcher');

const glossarySchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
});

const Entry = mongoose.model('Entry', glossarySchema);

module.exports = {
  save: (entry) => {
    return new Entry({word: entry.word.toLowerCase(), definition: entry.definition.toLowerCase()}).save();
  },
  getAll: () => {
    return Entry.find({})
      .sort({word: 1 })
      .exec();
  },
  search: ({word}) => {
    let lowerWord = word.toLowerCase();
    return Entry.find({word: {$regex: lowerWord}})
      .exec();

  },
  deleteWord: ({word}) => {
    return Entry.deleteOne({word: word})
      .exec();
  }
};

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
