const request = require("request");

const geocodeAddress = address => {
  const encodedAddress = encodeURIComponent(address);
  return new Promise((resolve, reject) => {
    request(
      {
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=KKhcCAkrb6qMG3p7sGO1ejq7v6poYYGU&location=${encodedAddress}`,
        json: true
      },
      (err, res, body) => {
        if (err) {
          reject(err);
        } else {
          const opt = {
            address: body.results[0].providedLocation.location,
            latitude: body.results[0].locations[0].displayLatLng.lat,
            longitude: body.results[0].locations[0].displayLatLng.lng
          };
          resolve(opt);
        }
      }
    );
  });
};

geocodeAddress("222322")
  .then(obj => console.log(`Result: `, JSON.stringify(obj, undefined, 2)))
  .catch(err => console.log("err", err));
