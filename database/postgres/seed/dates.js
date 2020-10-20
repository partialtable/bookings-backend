const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper')

// SEED GENERATOR
const datesGenerator = (start, end) => {

  let records = [];

  // writer.pipe(fs.createWriteStream('dates.csv'));
  for (var i = start; i <= end; i++) {

    if ( i === 50 || i === 1000 || i === 1500 || i === 15000 || i === 40000 || i === 60000 || i === 80000 || i === 200000 || i === 500000 || i === 750000 || i === 2000000 || i === 3000000 || i === 4000000) {
      console.log(`Seeded ${i} Records`);
    }

    const record = {
      booking_date: helper.generateDate(),
      restaurant_id: (Math.floor(Math.random() * 1000000) + 1),
    }
    records.push(record);
  }
  return records
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/CSV/datesTable.csv',
  header: [
    { id: 'booking_date', title: 'booking_date'},
    { id: 'restaurant_id', title: 'restaurant_id'},
  ],
});

const datesData = datesGenerator(1, 5000000);

csvWriter.writeRecords(datesData)
  .then(() => {
    console.log('CSV file created for dates data');
  })
  .catch(() => {
    console.log('Error while creating csv file');
  });
