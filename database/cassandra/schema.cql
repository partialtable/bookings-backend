DROP KEYSPACE IF EXISTS sdc_bookings_keyspace;

CREATE KEYSPACE SDC_Bookings_Keyspace WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE SDC_Bookings_Keyspace;

CREATE TABLE restaurants (
  restaurant_id int PRIMARY KEY,
  restaurant_name text
);

CREATE TABLE dates_by_restaurant (
  dates_id int,
  booking_date text,
  restaurant_name text,
  PRIMARY KEY(restaurant_name, booking_date)
);

CREATE TABLE times_by_date (
  reservation_id int,
  booking_date text,
  time_slot text,
  booked boolean,
  restaurant_id int,
  restaurant_name text,
  PRIMARY KEY((restaurant_name, booking_date), time_slot)
);

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
);

COPY restaurants(restaurant_id, restaurant_name) FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/csv/restaurantsTable.csv' WITH HEADER=TRUE;

COPY dates_by_restaurant(dates_id, booking_date, restaurant_name) FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/csv/datesByRestaurantTable.csv' WITH HEADER=TRUE;

COPY times_by_date(reservation_id, booking_date, time_slot, booked, restaurant_id, restaurant_name) FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/csv/timesByDateTable.csv' WITH HEADER=TRUE;

COPY reservations_by_user(restaurant_id, reservation_id, user_id, first_name, last_name, phone, email, party_size, date, time) FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/csv/reservationsByUserTable.csv' WITH HEADER=TRUE;
COPY reservations_by_user(restaurant_id, reservation_id, user_id, first_name, last_name, phone, email, party_size, date, time) FROM '/Users/karlmabunga/Documents/Repository/immersive/partialtablebookings/database/cassandra/seed/csv/2reservationsByUserTable.csv' WITH HEADER=TRUE;