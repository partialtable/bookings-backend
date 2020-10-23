module.exports = {

  // helper functions
  generateDate: function() {
    var randomMonth = Math.floor(Math.random() * (12 - 10) + 10)
    var randomDay = Math.floor(Math.random() * (30 - 1) + 1)
    return `${randomMonth}-${randomDay}-2020`
  },

  bookedOrNot: function() {
    var vals = [true, false];
    var booked = Math.random()
    booked > 0.5 ? booked = Math.floor(booked) : booked = Math.ceil(booked);
    return vals[booked]
  },

  reservationGenerator: function() {
    var randomMonth = Math.floor(Math.random() * (12 - 10) + 10)
    var randomDay = Math.floor(Math.random() * (30 - 1) + 1)
    return `${randomMonth}-${randomDay}-2020`
  },
  generatePhoneNumber: function() {
    const startOfPhoneNumber = '(415) 800 - '
    return `${startOfPhoneNumber}${Math.floor(Math.random() * (2000 - 1000) + 1000)}`
  },

  generateEmail: function() {
    const firstNames = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris', 'Eric', 'Michael', 'Josef'];
    const endOfEmail = '@example.com';
    return `${firstNames[Math.floor(Math.random() * 8)]}${endOfEmail}`
  },
  generateRestaurantName: function() {
    const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris', 'Eric', 'Michael', 'Josef', 'Yas', 'Fine', 'Awesome', 'Fantastic', 'Amazing', 'Delicious','Chungchun Hotdogs', 'Buncker21', 'Flying Pa-Dak', 'Koko BBQ', 'Tang 88', 'The SmoKING Ribs', 'Grams BBQ', 'Kaju Tofu', 'Pho 45', 'Dry Noodle 168', 'Hue Oi', 'Tam Bien', 'Lien Hue', 'Bien Hen', 'Twinkle Boba', 'Sharetea', '7 Leaves Cafe', 'Kung Fu Tea', 'Gong Cha', 'Taste Tea Cafe', 'Tasty Noodle House', 'Ramen Zuru', 'Umaya Ramen', 'Tampopo', 'Niko Niko', 'Kabuki', 'Gyu-Kaku', 'Dip Shabu Shabu', 'Pepper Lunch', 'Yuzu Shabu', 'Geko Tei', 'Nine Seafood', 'Claws', 'Stinkin Crawfish', 'The Cajun Crab', 'Louisiana Chicken', 'Mezcalero', 'The Grasshopper', 'The Bamboo Club', 'NextDoor', 'District Wine', 'The Carvery', '555 East', 'King Fish House', 'The Crab Shack', 'Pier 76', 'Restauration', 'Simmzy', 'Crooked Duck', 'The Local Spot'];

    const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches']

    return `${restaurantBeginning[Math.floor(Math.random() * restaurantBeginning.length)]}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`
  },


  // fake data
  restaurantBeginning: ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris', 'Eric', 'Michael', 'Josef'],

  restaurantEnding: ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'],

  time_slots: ['1600', '1615', '1630', '1645', '1700', '1715', '1730', '1745', '1800', '1815', '1830', '1845', '1900', '1915', '1930', '1945', '2000', '2015', '2030', '2045', '2100', '2115', '2130', '2145'],

  firstNames: ['Karl', 'Theo', 'Chris', 'Jenny', 'Harris', 'Jacob', 'Daniel', 'Lim', 'Adam', 'Boy', 'Charlie', 'David', 'Edward', 'Frank', 'George', 'Henry', 'Ida', 'John', 'King', 'Lincoln', 'Mary', 'Nora', 'Oscar', 'Paul', 'Queen', 'Robert', 'Sam', 'Trevor', 'Victor', 'William'],

  lastNames: ['Mabunga', 'Nguyen', 'Lopez', 'Park', 'Nhep', 'Johnson', 'Flores', 'Li', 'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf','Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa','Quebec', 'Romeo','Sierra', 'Tango','Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee','Zulu'],

}