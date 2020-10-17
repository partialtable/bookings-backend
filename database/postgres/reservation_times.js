const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// const csvWriteFile = require('csv-writer'); not sure if i want to use this or line 2
const faker = require('faker')

const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris'];


const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

const reservationGenerator = function() {
  var randomMonth = Math.floor(Math.random() * (12 - 10) + 10)
  var randomDay = Math.floor(Math.random() * (30 - 1) + 1)
  return `${randomMonth}-${randomDay}-2020`
}

const time_slots = ['1800', '1900', '2000'];

const reservation_timesGenerator = () => {

  writer.pipe(fs.createWriteStream('res_times.csv'));
  for (var i = 0; i < 250000; i++) {

    if ( i === 50 || i === 1000 || i === 50000 || i === 75000 || i === 100000 || i === 150000|| i === 200000 ) {
      console.log(`Seeded ${i} Records`);
    }

    writer.write({
      time_slot: `${time_slots[Math.floor(Math.random() * 3)]}`,
      booked: false,
      restaurant_name: `${restaurantBeginning[Math.floor(Math.random() * 8)]}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`,
      booking_date: generateDate(),
      dates_id: (Math.floor(Math.random() * 100000) + 1),
      user_id: (Math.floor(Math.random() * 50000) + 1),
    })
  }

  writer.end()
  console.log('reservation_times complete')

}

reservation_timesGenerator();