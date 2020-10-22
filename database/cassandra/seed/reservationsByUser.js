const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper');


// const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris']

// const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

// data gen
const reservationsDataGen = (start, end) => {

  const records = [];
  for (var i = start; i <= end; i++) {

    // check the status
    if ( i === 50 || i === 1000 || i === 5000 || i === 10000 || i === 20000 || i === 50000 || i === 75000 || i === 100000 || i === 150000 || i === 200000 || i === 300000 || i === 400000) {
      console.log(`Seeded ${i} Records`);
    }

    let record = {
      restaurant_id: (Math.floor(Math.random() * 4999999) + 1),
      reservation_id: (Math.floor(Math.random() * 4999999) + 1),
      user_id: i,
      first_name: `${helper.firstNames[Math.floor(Math.random() * 8)]}`,
      last_name: `${helper.lastNames[Math.floor(Math.random() * 8)]}`,
      phone: helper.generatePhoneNumber(),
      email: helper.generateEmail(),
      party_size: Math.floor(Math.random() * (10 - 2) + 2),
      date: helper.generateDate(),
      time: `${helper.time_slots[Math.floor(Math.random() * 12)]}`,
    }
    records.push(record)
  }

  return records
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/CSV/2reservationsByUserTable.csv',
  header: [
    { id: 'restaurant_id', title: 'restaurant_id' },
    { id: 'reservation_id', title: 'reservation_id' },
    { id: 'user_id', title: 'user_id' },
    { id: 'first_name', title: 'first_name' },
    { id: 'last_name', title: 'last_name' },
    { id: 'phone', title: 'phone' },
    { id: 'email', title: 'email' },
    { id: 'party_size', title: 'party_size' },
    { id: 'date', title: 'date' },
    { id: 'time', title: 'time' },
  ],
});

const reservationsByUser = reservationsDataGen(5000001, 10000000);

csvWriter.writeRecords(reservationsByUser)
  .then(() => {
    console.log('CSV file created for cassandra reservations by user data');
  })
  .catch((error) => {
    console.log(error);
  });

