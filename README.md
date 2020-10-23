
# bookings-service
This is a feature to see available times for selected dates and number of guests

## Related Projects

  - https://github.com/TKOut-HRSF130/popular-dishes-service
  - https://github.com/TKOut-HRSF130/photos-carousel-service
  - https://github.com/TKOut-HRSF130/bookings-service
  - https://github.com/TKOut-HRSF130/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

# CRUD Operations

## Server API

## GET a reservation date
### Get restaurant name

  * GET Endpoint- `/api/restaurant/:restaurantId`

**Path Parameters:**
  * `restaurantId` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "restaurantName": "String",
    }
```
This will respond with the restaurant name.

### Get restaurant reservation info
  GET Endpoint- `/api/:restaurantId/bookings/:dateId`

**Path Parameters:**
  * `restaurantId` restaurant id
  * `dateId` date id

**Success Status Code:** `200`

**Returns:** JSON

```
    [
    String (available date),
    String (available date),
    String (available date),
    String (available date),
    String (available date)
    ]
```
This will respond with the available restaurant reservations.


## POST a reservation date
### Add restaurant
  * POST Endpoint-  `/api/:restaurantId/bookings/:date`

  **Path Parameters:**
  * `restaurantId` restaurant id
  * `date` utf date

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "restaurantId": "Number",
      "date": "String",
      "name": "String",
      "phone": "String",
      "firstName": "String",
      "lastName": "String",
      "email": "String",
      "time": "String",
      "seatingPreference": "String",
      "partySize": "Number"
    }
```

## UPDATE restaurant reservation
### Update reservations
  * PATCH Endpoint-  `/api/:restaurantId/bookings/:date`

  **Path Parameters:**
  * `restaurantId` restaurant id
  * `date` utf date

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "restaurantId": "Number",
      "date": "String",
      "phone": "String",
      "firstName": "String",
      "lastName": "String",
      "email": "String",re
      "time": "String",
      "seatingPreference": "String",
      "partySize": "Number"
    }
```


## Delete restaurant reservation
### Cancel a reservation
  * DELETE Endpoint-  `/api/:restaurantId/bookings/:date/cancel/:time`

  **Path Parameters:**
  * `restaurantId` restaurant id
  * `date` utf date
  * `time` time of cancellation

**Success Status Code:** `204`

