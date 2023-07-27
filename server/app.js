const express = require('express');
const morgan = require('morgan');
const router = require('express').Router();
const {findBand, getSongs, addSong, deleteSong, updateSong, updateNotes} = require('./controllers.js');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('client/dist'));
app.use('/', router);
router.post('/findBand', findBand);
router.post('/addSong', addSong);
router.get('/getSongs', getSongs);
router.delete('/deleteSong', deleteSong);
router.put('/updateSong', updateSong);
router.put('/updateNotes', updateNotes);

module.exports = app;
