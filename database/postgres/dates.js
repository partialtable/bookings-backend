const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// const csvWriteFile = require('csv-writer'); not sure if i want to use this or line 2
const faker = require('faker')

const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

const generateDate = function() {
  var randomMonth = Math.floor(Math.random() * (12 - 10) + 10)
  var randomDay = Math.floor(Math.random() * (30 - 1) + 1)
  return `${randomMonth}-${randomDay}-2020`
}

const datesGenerator = () => {

  writer.pipe(fs.createWriteStream('dates.csv'));
  for (var i = 0; i < 100000; i++) {

    if ( i === 50 || i === 1000 || i === 1500 || i === 15000 || i === 40000 || i === 800000 ) {
      console.log(`Seeded ${i} Records`);
    }

    writer.write({
      booking_date: generateDate(),
      restaurant_id: (Math.floor(Math.random() * 249999) + 1),
    })
  }

  writer.end()
  console.log('datesGenerator complete')

}

datesGenerator();