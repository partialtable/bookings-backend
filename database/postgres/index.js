var pgp = require('pg-promise')(/* options*/)
var db = pgp('postgres://karlmabunga@/sdc_bookings')


db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
