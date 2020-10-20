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
    const restaurantBeginning = ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris', 'Eric', 'Michael', 'Josef']

    const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches']

    return `${restaurantBeginning[Math.floor(Math.random() * 11)]}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`
  },


  // fake data
  restaurantBeginning: ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris', 'Eric', 'Michael', 'Josef'],

  restaurantEnding: ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'],

  time_slots: ['1800', '1900', '2000'],

  firstNames: ['Karl', 'Theo', 'Chris', 'Jenny', 'Lim', 'Jacob', 'Daniel', 'Harris'],

  lastNames: ['Mabunga', 'Nguyen', 'Lopez', 'Park', 'Nhep', 'Johnson', 'Flores', 'Li'],

}