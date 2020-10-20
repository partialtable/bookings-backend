const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper');



// const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris']

// const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

// data gen
const restaurantsDataGen = (start, end) => {

  const records = [];
  for (var i = start; i < end; i++) {

    // check the status
    if ( i === 50 || i === 1000 || i === 5000 || i === 10000 || i === 20000 || i === 50000 || i === 75000 || i === 100000 || i === 150000 || i === 200000 || i === 300000 || i === 400000) {
      console.log(`Seeded ${i} Records`);
    }

    let record = {
      dates_id: i,
      booking_date: helper.generateDate(),
      restaurant_name: helper.generateRestaurantName(),
    }
    records.push(record)
  }

  return records
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/CSV/datesByRestaurantTable.csv',
  header: [
    { id: 'dates_id', title: 'dates_id' },
    { id: 'booking_date', title: 'booking_date' },
    { id: 'restaurant_name', title: 'restaurant_name' },
  ],
});

const restaurantData = restaurantsDataGen(1, 500000);

csvWriter.writeRecords(restaurantData)
  .then(() => {
    console.log('CSV file created for cassandra dates by restaurants data');
  })
  .catch((error) => {
    console.log(error);
  });

