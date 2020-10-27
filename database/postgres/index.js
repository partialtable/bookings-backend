var pgp = require('pg-promise')(/* options*/)
var db = pgp('postgres://karlmabunga@/sdc_bookings')


const getRestaurantName = (id, callback) => {
  console.log('model query: ', id)
  const q = `SELECT restaurant_name FROM restaurants WHERE id = ${id}`;
  // console.log('db', db)
  db.query(q)
    .then((res) => {
      // console.log('response from index: ',res)
      callback(null, res)
    })
    .catch((err) => {
      console.log(err)
      callback(res)
    })
}

const getReservationInfo = (resId, date, callback) => {
  const q =  `SELECT time_slot from reservation_times where restaurant_id = ${resId} and booking_date = '${date}' and booked = false`;
  // const q =  `SELECT reservation_times.time_slot FROM reservation_times LEFT JOIN restaurants ON restaurants.restaurant_id = ${resId} and reservation_times.booking_date = '${date}' and booked = false`;
  db.query(q)
    .then((res) => {
      // console.log('Reservation Info Success')
      callback(null, res)
    })
    .catch((res) => {
      callback(res)
    })
}

const bookReservation = ( restaurant_id, date, user_id, callback ) => {
  const q = `UPDATE reservation_times SET booked = true, _user_id = ${user_id} WHERE booking_date = '${date}' AND restaurant_id = ${restaurant_id}`;
  db.query(q)
    .then((res) => {
      console.log('successful update', res)
      callback(null, res)
    })
    .catch((res) => {
      callback(res)
    })
}

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

module.exports.getRestaurantName = getRestaurantName;
module.exports.getReservationInfo = getReservationInfo;
module.exports.bookReservation = bookReservation;