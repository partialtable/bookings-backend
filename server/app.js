const express = require('express');
require('newrelic');
// const bodyParser = require('body-parser');
// const path = require('path');
const postdb = require('../database/postgres/index.js');
// const cassdb = require('../database/cassandra');
// const calculateReservations = require('./calculateReservations');
// const cors = require('cors');

const app = express();

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '/../public')));

// app.get('/:restaurantId', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../public/index.html'));
// });

app.get('/test', (req, res) => {
  res.send('hello world')
})

app.get('/api/restaurant/:restaurantId', (request, response) => {
  const {restaurantId} = request.params;
  // console.log('res id', restaurantId);
  postdb.getRestaurantName(restaurantId, (err, result) => {
    if (err) {
      response.status(400).send()
      console.log(err)
    } else {
      response.status(200).send(result)
      // console.log('result: ', result)
    }
  })
})

app.get('/api/:restaurantId/bookings/:date', (request, response) => {
  const { restaurantId, date } = request.params;
  // console.log('resid: ', restaurantId)
  // console.log('date: ', date)
  postdb.getReservationInfo(restaurantId, date, (err, result) => {
    if (err) {
      response.status(400).send()
    } else {
      response.status(200).send(result)
    }
  })
})

app.put('/api/:restaurantId/booking/:date/user/:user', (request, response) => {
  const { restaurantId, date, user } = request.params;
  console.log(restaurantId, date, user)
  postdb.bookReservation(restaurantId, date, user, (err, result) => {
    if (err) {
      response.status(400).send(err)
    } else {
      response.status(200).send(result)
    }
  })
})

// app.get('/api/bookings/restaurantName/:restaurantId', (req, res) => {
//   const restaurantId = req.query.restaurantId;
//   db.getRestaurantName(restaurantId, (err, data) => {
//     if (err) {
//       res.status(400).send('could not get restaurant name');
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

// app.post('/api/bookings/:restaurantId', (req, res) => {
//   const reservation = req.body;
//   reservation.restaurantId = req.params.restaurantId;
//   db.addReservation(reservation, (err) => {
//     if (err) {
//       res.status(400).send('could not reserve');
//     } else {
//       res.status(200).send('reservation made');
//     }
//   });
// });

// app.get('/api/bookings/:restaurantId', (req, res) => {
//   const reservation = req.query;
//   reservation.restaurantId = req.params.restaurantId;
//   db.getReservations(reservation, (err, reservationData, restaurantData) => {
//     if (err) {
//       res.status(400).send('error finding reservations');
//     } else {
//       res.status(200).send(calculateReservations(reservationData, restaurantData, reservation));
//     }
//   });
// });

module.exports = app;
