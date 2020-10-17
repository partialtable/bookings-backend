drop database if exists FEC_Bookings;

create database FEC_Bookings;

use FEC_Bookings;


CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurant_name VARCHAR NOT NULL,
)

CREATE TABLE dates (
  dates_id SERIAL PRIMARY KEY,
  booking_date DATE NOT NULL,
  restaurant_id FOREIGN KEY REFERENCES restaurants(id)
  -- times_id INT[] NOT NULL FOREIGN KEY REFERENCES reservation_times(times_id)
)

CREATE TABLE reservation_times (
  times_id SERIAL PRIMARY KEY,
  time_slot VARCHAR,
  booked BOOLEAN DEFAULT false,
  restaurant_name VARCHAR NOT NULL,
  booking_date VARCHAR NOT NULL,
  dates_id INT FOREIGN KEY REFERENCES dates(dates_id) ON DELETE CASCADE
  _user_id INT FOREIGN KEY REFERENCES users(_user_id) ON DELETE SET DEFAULT
)

CREATE TABLE users (
  _user_id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  party_size INT NOT NULL,
)


-- drop database if exists FEC_Bookings;

-- create database FEC_Bookings;

-- use FEC_Bookings;

-- create table restaurants (
--   id int not null auto_increment primary key,
--   seatCapacity int not null,
--   name varchar(255) not null
-- );

-- create table reservations (
--   id int not null auto_increment primary key,
--   restaurantId int not null,
--   partySize int not null,
--   name varchar(255) not null,
--   date bigint not null,
--   contactInfo varchar(255) not null,
--   occasion varchar(255) null
-- );

-- -- mysql -u root -p < database/schema.sql