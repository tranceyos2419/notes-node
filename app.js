const request = require("request");

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=KKhcCAkrb6qMG3p7sGO1ejq7v6poYYGU&location=1301%20lombard%20street%20philadelphia`,
    json: true
  },
  (err, res, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(
      `Address: ${JSON.stringify(body.results[0].providedLocation.location)}`
    );
    console.log(`Latitude ${body.results[0].locations[0].displayLatLng.lat}`);
    console.log(`Longitude ${body.results[0].locations[0].displayLatLng.lng}`);
  }
);
