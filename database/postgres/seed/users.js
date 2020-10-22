const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const helper = require('../../helpers/helper');


// SEEDING FUNCTIONS
const usersGenerator = (start, end) => {
  const records = [];

  for (var i = start; i <= end; i++) {
    // checking for status
    if ( i === 50 || i === 500 || i === 1150 || i === 2500 || i === 5000 || i === 7500 || i === 20000 || i === 100000 || i === 500000 || i === 750000 || i === 2000000 || i === 3000000  || i === 4000000) {
      console.log(`Seeded ${i} user records`);
    }

    const record = {
      _user_id: i,
      first_name: `${helper.firstNames[Math.floor(Math.random() * helper.firstNames.length)]}`,
      last_name: `${helper.lastNames[Math.floor(Math.random() * helper.lastNames.length)]}`,
      phone: helper.generatePhoneNumber(),
      email: helper.generateEmail(),
      party_size: Math.floor(Math.random() * (10 - 2) + 2)
    }
    records.push(record);
  }

  return records;
}

const csvWriter = createCsvWriter({
  path: '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/CSV/usersTable.csv',
  header: [
    { id: '_user_id', title: '_user_id'},
    { id: 'first_name', title: 'first_name'},
    { id: 'last_name', title: 'last_name'},
    { id: 'phone', title: 'phone'},
    { id: 'email', title: 'email'},
    { id: 'party_size', title: 'party_size'},
  ]
})

const userData = usersGenerator(1, 5000000);

csvWriter.writeRecords(userData)
  .then(() => {
    console.log('CSV file created for userData');
  })
  .catch(() => {
    console.log('Error while creating csv file');
  });