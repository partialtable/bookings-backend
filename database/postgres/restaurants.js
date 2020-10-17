const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// const csvWriteFile = require('csv-writer'); not sure if i want to use this or line 2
const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris']

const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

const restaurantsGenerator = () => {

  writer.pipe(fs.createWriteStream('restaurants.csv'));
  for (var i = 0; i < 250000; i++) {

    if ( i === 50 || i === 500000 || i === 100000 || i === 250000 ) {
      console.log(`Seeded ${i} Records`);
    }

    writer.write({
      restaurant_name: `${restaurantBeginning[Math.floor(Math.random() * 8)]}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`,
    })
  }

  writer.end()
  console.log('done')

}

restaurantsGenerator();