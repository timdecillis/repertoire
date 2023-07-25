const express = require('express');
const morgan = require('morgan');
const router = require('express').Router();
const {get, post} = require('./controllers.js');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('client/dist'));
app.use('/', router);
router.get(get);
router.post(post);

module.exports = app;
