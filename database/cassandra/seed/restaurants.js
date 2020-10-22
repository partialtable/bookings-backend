const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper');




// const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris']

// const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

const restaurantsDataGen = (start, end) => {

  const records = [];
  for (var i = start; i <= end; i++) {

    // check the status
    if ( i === 50 || i === 1000 || i === 5000 || i === 10000 || i === 20000 || i === 50000 || i === 75000 || i === 100000 || i === 150000 || i === 200000 || i === 500000 || i === 750000) {
      console.log(`Seeded ${i} Records`);
    }

    let record = {
      restaurant_id: i,
      restaurant_name: `${helper.restaurantBeginning[Math.floor(Math.random() * 8)]}'s ${helper.restaurantEnding[Math.floor(Math.random() * 13)]}`,
    }
    records.push(record)
  }

  return records
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/CSV/restaurantsTable.csv',
  header: [
    { id: 'restaurant_id', title: 'restaurant_id' },
    { id: 'restaurant_name', title: 'restaurant_name' },
  ],
});

const restaurantData = restaurantsDataGen(1, 5000000);

csvWriter.writeRecords(restaurantData)
  .then(() => {
    console.log('CSV file created for cassandra restaurants data');
  })
  .catch((error) => {
    console.log(error);
  });

