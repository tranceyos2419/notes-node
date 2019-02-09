const request = require("request");

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=KKhcCAkrb6qMG3p7sGO1ejq7v6poYYGU&location=${encodedAddress}`,
      json: true
    },
    (err, res, body) => {
      if (err) {
        callback(`Unable to connect to the server`);
      } else if (body.info.statuscode === 400) {
        callback(`${body.info.messages[0]}`);
      } else if (body.info.statuscode === 0) {
        callback(undefined, {
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].displayLatLng.lat,
          longitude: body.results[0].locations[0].displayLatLng.lng
        });
      }
    }
  );
};

module.exports = {
  geocodeAddress
};
