import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 50 }, // Ramp-up to 50 users over 30 seconds
    { duration: "1m", target: 50 }, // Hold at 50 users for 1 minute
    { duration: "30s", target: 0 }, // Ramp-down to 0 users over 30 seconds
  ],
};

export default function () {
  let res = http.get("http://a3a08bcbb569c4c6592ab465d70d1f07-504915362.us-east-1.elb.amazonaws.com/health");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
