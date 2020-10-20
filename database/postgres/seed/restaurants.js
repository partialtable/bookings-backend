const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper');

// SEED GENERATION
const restaurantsGenerator = (start, end) => {
  const records = [];

  // writer.pipe(fs.createWriteStream('restaurants.csv'));
  for (var i = start; i <= end; i++) {

    if ( i === 50 || i === 50000 || i === 100000 || i === 250000 || i === 500000 || i === 750000) {
      console.log(`Seeded ${i} Records`);
    }

    const record = {
      id: i,
      restaurant_name: `${helper.restaurantBeginning[Math.floor(Math.random() * 11)]}'s ${helper.restaurantEnding[Math.floor(Math.random() * 13)]}`,
    }
    records.push(record);
  }

  return records
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/CSV/restaurantsTable.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'restaurant_name', title: 'restaurant_name' },
  ],
});

const genData = restaurantsGenerator(1,250000);

csvWriter.writeRecords(genData)
  .then(() => {
    console.log('CSV file created for restaurants data');
  })
  .catch((error) => {
    console.log(error);
  });