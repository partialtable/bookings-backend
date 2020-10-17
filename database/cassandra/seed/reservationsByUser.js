const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// const csvWriteFile = require('csv-writer'); not sure if i want to use this or line 2
const faker = require('faker')

const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

const dataGenerator = () => {

  writer.pipe(fs.createWriteStream('reservationsByUser.csv'));
  for (var i = 0; i < 500000; i++) {

    if ( i === 50 || i === 500000 || i === 1000000 || i === 5000000 ) {
      console.log(`Seeded ${i} Records`);
      restaurant_name: `${faker.name.firstName()}'s *add ending*`,
      booking_date: ,
      time_slot: ,
      booked: false,
    }

    writer.write({
      restaurant_id:
    })
  }


}