import { sleep } from "k6";
import http from "k6/http";

const helper = require('./database/helpers/helper.js')

export const options = {
  stages: [
    { duration: "10s", target: 600 },
    { duration: "10s", target: 1000 },
    { duration: "5s", target: 2000 },
    { duration: "15s", target: 2000 },
    // { duration: "30s", target: 0 },
  ],
};

export default function main() {
  let response;

  response = http.get(`http://localhost:3000/api/${(Math.floor(Math.random() * 10000000) + 1)}/bookings/${helper.generateDate()}`);

  // Automatically added sleep
  sleep(.1);
}