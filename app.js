const request = require("request");

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=KKhcCAkrb6qMG3p7sGO1ejq7v6poYYGU&location=1301%20lombard%20street%20philadelphia`,
    json: true
  },
  (err, res, body) => {
    console.log(body);
  }
);
