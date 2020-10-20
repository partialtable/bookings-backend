const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper')

// SEED GENERATION
const reservation_timesGenerator = (start, end) => {
  let records = [];

  for (var i = start; i <= end; i++) {

    // checking status of seed
    if ( i === 50 || i === 1000 || i === 50000 || i === 75000 || i === 100000 || i === 150000 || i === 200000 || i === 500000 || i === 700000 || i === 900000 || i === 15000000 || i === 2000000 || i === 3000000  || i === 4000000 || i === 5000000 || i === 6000000 || i === 7000000 || i === 8000000 || i === 9000000) {
      console.log(`Seeded ${i} reservation Records`);
    }

    const record = {
      time_slot: `${helper.time_slots[Math.floor(Math.random() * 3)]}`,
      booked: helper.bookedOrNot(),
      restaurant_name: `${helper.restaurantBeginning[Math.floor(Math.random() * 8)]}'s ${helper.restaurantEnding[Math.floor(Math.random() * 13)]}`,
      booking_date: helper.generateDate(),
      dates_id: (Math.floor(Math.random() * 1000000) + 1),
      _user_id: (Math.floor(Math.random() * 1000000) + 1)
    }
    records.push(record);
  }

  return records
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/CSV/reservationTimesTable2.csv',
  header: [
    { id: 'time_slot', title: 'time_slot'},
    { id: 'booked', title: 'booked'},
    { id: 'restaurant_name', title: 'restaurant_name'},
    { id: 'booking_date', title: 'booking_date'},
    { id: 'dates_id', title: 'dates_id'},
    { id: '_user_id', title: 'user_id'},
  ],
})

const reservationData = reservation_timesGenerator(1, 5000000);

csvWriter.writeRecords(reservationData)
  .then(() => {
    console.log('CSV file created for reservation times');
  })
  .catch(() => {
    console.log('Error while creating csv file');
  });

