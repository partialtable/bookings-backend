const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();


const dataGenerator = () => {

  writer.pipe(fs.createWriteStream('reservationsByUser.csv'));
  for (var i = 0; i < 500000; i++) {

    if ( i === 50 || i === 500000 || i === 1000000 || i === 5000000 ) {
      console.log(`Seeded ${i} Records`);
    }

    writer.write({
      restaurant_id:
    })
  }


}