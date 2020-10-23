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


-- CREATE TABLE dates (
--   dates_id SERIAL PRIMARY KEY,
--   booking_date VARCHAR NOT NULL,
--   restaurant_id INT,
--   CONSTRAINT fk_restaurants
--     FOREIGN KEY(restaurant_id)
--       REFERENCES restaurants(id)
--   -- times_id INT[] NOT NULL FOREIGN KEY REFERENCES reservation_times(times_id)
-- );

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
  -- id VARCHAR NOT NULL,
  restaurant_id INT,
  booking_date VARCHAR NOT NULL,
  -- dates_id INT,
  _user_id INT,
  CONSTRAINT fk_dates
    FOREIGN KEY(restaurant_id)
      REFERENCES restaurants(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_users
    FOREIGN KEY(_user_id)
      REFERENCES users(_user_id)
      ON DELETE SET DEFAULT

);

-------------------------------------- restaurants ------------------------------------
COPY restaurants(id, restaurant_name)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/restaurantsTable.csv'
DELIMITER ','
CSV HEADER;
COPY restaurants(id, restaurant_name)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/2restaurantsTable.csv'
DELIMITER ','
CSV HEADER;
COPY restaurants(id, restaurant_name)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/3restaurantsTable.csv'
DELIMITER ','
CSV HEADER;
COPY restaurants(id, restaurant_name)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/4restaurantsTable.csv'
DELIMITER ','
CSV HEADER;


-- COPY dates(dates_id, booking_date, restaurant_id)
-- FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/datesTable.csv'
-- DELIMITER ','
-- CSV HEADER;

-------------------------------------- users ------------------------------------
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/usersTable.csv'
DELIMITER ','
CSV HEADER;
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/2usersTable.csv'
DELIMITER ','
CSV HEADER;
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/3usersTable.csv'
DELIMITER ','
CSV HEADER;
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/4usersTable.csv'
DELIMITER ','
CSV HEADER;
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/5usersTable.csv'
DELIMITER ','
CSV HEADER;
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/6usersTable.csv'
DELIMITER ','
CSV HEADER;
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/7usersTable.csv'
DELIMITER ','
CSV HEADER;
COPY users(_user_id, first_name, last_name, phone, email, party_size)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/8usersTable.csv'
DELIMITER ','
CSV HEADER;

-------------------------------------- reservations ------------------------------------
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/2reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/3reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/4reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/5reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/6reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/7reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/8reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/9reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/10reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/11reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/12reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/13reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;
COPY reservation_times(times_id, time_slot, booked, restaurant_id, booking_date, _user_id)
FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/postgres/seed/csv/14reservationTimesTable.csv'
DELIMITER ','
CSV HEADER;


-- -- mysql -u root -p < database/schema.sql