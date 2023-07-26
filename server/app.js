const express = require('express');
const morgan = require('morgan');
const router = require('express').Router();
const findBand = require('./controllers.js');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('client/dist'));
app.use('/', router);
router.post('/findBand', findBand);
// router.post(post);

module.exports = app;
