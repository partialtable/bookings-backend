const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const postdb = require('../database/postgres/index.js');
// const cassdb = require('../database/cassandra');
const calculateReservations = require('./calculateReservations');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/:restaurantId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

module.exports = app;