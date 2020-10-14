# CRUD Operations

## PostgreSQL

## Server API

## GET - /api/bookings/restaurantName/:id
### Get restaurant name

  * GET Endpoint- `/api/bookings/restaurantName/:restaurantId`

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
  GET Endpoint- `/api/:user/bookings/:restaurantId`

**Path Parameters:**
  * `restaurantId` restaurant id
  * `user` username

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
  * POST Endpoint-  `/api/:user/bookings/:restaurantId`

  **Path Parameters:**
  * `restaurantId` restaurant id
  * `user` username

**Success Status Code:** `201`

## UPDATE restaurant reservation
### Update reservations
  * PATCH Endpoint-  `/api/:user/bookings/:restaurantId`

  **Path Parameters:**
  * `restaurantId` restaurant id
  * `user` username

**Success Status Code:** `204`


## Delete restaurant reservation
### Cancel a reservation
  * DELETE Endpoint-  `/api/bookings/:restaurantId`

  **Path Parameters:**
  * `restaurantId` restaurant id
  * `user` username

**Success Status Code:** `204`
