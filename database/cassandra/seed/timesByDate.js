const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper');


// const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris']

// const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

// data gen
const timesByDateDataGen = (start, end) => {

  const records = [];
  for (var i = start; i <= end; i++) {

    // check the status
    if ( i === 50 || i === 1000 || i === 5000 || i === 10000 || i === 20000 || i === 50000 || i === 75000 || i === 100000 || i === 150000 || i === 200000 || i === 300000 || i === 400000 || i === 500000 || i === 650000 || i === 850000 || i === 1000000 || i === 2000000 || i === 3000000 || i === 4000000) {
      console.log(`Seeded ${i} Records`);
    }

    let record = {
      reservation_id: i,
      booking_date: helper.generateDate(),
      time_slot: `${helper.time_slots[Math.floor(Math.random() * 3)]}`,
      booked: helper.bookedOrNot(),
      restaurant_id: (Math.floor(Math.random() * 4999999) + 1),
      restaurant_name: helper.generateRestaurantName(),
    }
    records.push(record)
  }

  return records
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/CSV/timesByDateTable.csv',
  header: [
    { id: 'reservation_id', title: 'reservation_id' },
    { id: 'booking_date', title: 'booking_date' },
    { id: 'time_slot', title: 'time_slot' },
    { id: 'booked', title: 'booked' },
    { id: 'restaurant_id', title: 'restaurant_id' },
    { id: 'restaurant_name', title: 'restaurant_name' },
  ],
});

const timesByDate = timesByDateDataGen(1, 5000000);

csvWriter.writeRecords(timesByDate)
  .then(() => {
    console.log('CSV file created for cassandra times by date data');
  })
  .catch((error) => {
    console.log(error);
  });

