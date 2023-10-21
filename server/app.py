
# const morgan = require('morgan'); log the requests to the server
# const router = require('express').Router();
# const app = express(); create a server app

# const {findBand, getSongs, addSong, deleteSong, updateSong, updateNotes, createUser} = require('./controllers.js'); import controllers

# app.use(morgan('dev')); logging middleware
# app.use(express.json()); jsonify middleware
# app.use(express.static('client/dist')); serve the static html page
# app.use('/', router); defined the main router

# router.post('/findBand', findBand);
# router.post('/users', createUser);
# router.post('/addSong', addSong);

# router.get('/getSongs', getSongs);

# router.delete('/deleteSong', deleteSong);

# router.put('/updateSong', updateSong);
# router.put('/updateNotes', updateNotes);

# module.exports = app; export the server
