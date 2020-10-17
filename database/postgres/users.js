const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// const csvWriteFile = require('csv-writer'); not sure if i want to use this or line 2

// HELPER FUNCTIONS
const firstNames = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris'];
const lastNames = ['Mabunga', 'Nguyen', 'Lopez', 'Park', 'Nhep', 'Johnson', 'Flores', 'Li'];
const generatePhoneNumber = () => {
  const startOfPhoneNumber = '(415) 800 - '
  return `${startOfPhoneNumber}${Math.floor(Math.random() * (2000 - 1000) + 1000)}`
};
const generateEmail = () => {
  const endOfEmail = '@example.com';
  return `${firstNames[Math.floor(Math.random() * 8)]}${endOfEmail}`
};


// SEEDING FUNCTIONS
const usersGenerator = () => {

  writer.pipe(fs.createWriteStream('users.csv'));
  for (var i = 0; i < 10000; i++) {

    if ( i === 50 || i === 500 || i === 1150 || i === 2500 || i === 5000 || i === 7500) {
      console.log(`Seeded ${i} user records`);
    }

    writer.write({
      first_name: `${firstNames[Math.floor(Math.random() * 8)]}`,
      last_name: `${lastNames[Math.floor(Math.random() * 8)]}`,
      phone: generatePhoneNumber(),
      email: generateEmail(),
      party_size: Math.floor(Math.random() * (10 - 2) + 2)
    })
  }

  writer.end()
  console.log('done')

}

usersGenerator();