const request = require("request");

const getWeather = (lat, lon, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/e65929a5bb478a78781b80c52f230d47/${lat},${lon}`,
      json: true
    },
    (err, res, body) => {
      if (err) {
        callback(`err ${err}`);
      } else if (res.statusCode !== 200) {
        callback(`statusCode: ${res.statusCode}`);
      } else {
        callback(undefined, {
          temperature: body.currently.temperature
        });
      }
    }
  );
};
module.exports.getWeather = getWeather;
