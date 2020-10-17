DROP KEYSPACE IF EXISTS FEC_Bookings_Keyspace

CREATE KEYSPACE FEC_Bookings_Keyspace WITH replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 1};

USE FEC_Bookings_Keyspace;

CREATE TABLE restaurants (
  restaurant_id int PRIMARY KEY,
  restaurant_name text,
)

CREATE TABLE dates_by_restaurant (
  dates_id int,
  booking_date date,
  restaurant_name text,
  PRIMARY KEY(restaurant_name, booking_date)
)

CREATE TABLE times_by_date (
  reservation_id int,
  booking_date date,
  time_slot text,
  booked boolean,
  restaurant_id int,
  restaurant_name text,
  PRIMARY KEY((restaurant_name, booking_date), time_slot)
)

CREATE TABLE reservations_by_user (
  restaurant_id int,
  reservation_id int,
  user_id int,
  first_name text,
  last_name text,
  phone text,
  email text,
  party_size int,
  date text,
  time text,
  PRIMARY KEY (user_id, date)
)
