# CRUD Operations

## PostgreSQL

## Server API

## GET - /api/bookings/restaurantName/:id
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
  GET Endpoint- `/api/:restaurantId/bookings/:date`

**Path Parameters:**
  * `restaurantId` restaurant id
  * `date` utf date

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


## Delete restaurant reservation
### Cancel a reservation
  * DELETE Endpoint-  `/api/:restaurantId/bookings/:date/cancel/:time`

  **Path Parameters:**
  * `restaurantId` restaurant id
  * `date` utf date
  * `time` time of cancellation

**Success Status Code:** `204`

