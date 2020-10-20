-- drop database if exists FEC_Bookings;



DROP DATABASE IF EXISTS SDC_Bookings;
CREATE DATABASE SDC_Bookings;
\c sdc_bookings;

DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS dates CASCADE;
DROP TABLE IF EXISTS reservation_times CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurant_name VARCHAR NOT NULL
);


CREATE TABLE dates (
  dates_id SERIAL PRIMARY KEY,
  booking_date VARCHAR NOT NULL,
  restaurant_id INT,
  CONSTRAINT fk_restaurants
    FOREIGN KEY(restaurant_id)
      REFERENCES restaurants(id)
  -- times_id INT[] NOT NULL FOREIGN KEY REFERENCES reservation_times(times_id)
);

CREATE TABLE users (
  _user_id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  party_size INT NOT NULL
);

CREATE TABLE reservation_times (
  times_id SERIAL PRIMARY KEY,
  time_slot VARCHAR,
  booked BOOLEAN DEFAULT false,
  restaurant_name VARCHAR NOT NULL,
  booking_date VARCHAR NOT NULL,
  dates_id INT,
  _user_id INT,
  CONSTRAINT fk_dates
    FOREIGN KEY(dates_id)
      REFERENCES dates(dates_id)
      ON DELETE CASCADE,
  CONSTRAINT fk_users
    FOREIGN KEY(_user_id)
      REFERENCES users(_user_id)
      ON DELETE SET DEFAULT
  -- dates_id FOREIGN KEY REFERENCES dates(dates_id) ON DELETE CASCADE,
  -- _user_id FOREIGN KEY REFERENCES users(_user_id) ON DELETE SET DEFAULT
);

COPY restaurants(id, restaurant_name)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/restaurantsTable.csv'
DELIMITER ','
CSV HEADER;


COPY dates(booking_date, restaurant_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/datesTable.csv'
DELIMITER ','
CSV HEADER;


COPY users(first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/usersTable.csv'
DELIMITER ','
CSV HEADER;


COPY reservation_times(time_slot, booked, restaurant_name, booking_date, dates_id, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(time_slot, booked, restaurant_name, booking_date, dates_id, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/2reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;


-- -- mysql -u root -p < database/schema.sql