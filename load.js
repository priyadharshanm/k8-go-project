import http from "k6/http";
import { check } from "k6";


export const options = {
  vus: 100,
  duration: '30s',
};

const BASE_URL = 'http://a3a08bcbb569c4c6592ab465d70d1f07-504915362.us-east-1.elb.amazonaws.com/'

function demo() {
  const url = `${BASE_URL}`;


  let resp = http.get(url);

  check(resp, {
    'endpoint was successful': (resp) => {
      if (resp.status === 200) {
        console.log(`PASS! url`)
        return true
      } else {
        console.error(`FAIL! status-code: ${resp.status}`)
        return false
      }
    }
  });
}


export default function () {
    demo()
}
