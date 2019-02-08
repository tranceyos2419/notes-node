const request = require("request");
const yargs = require("yargs");

const argv = yargs
  .option("a", {
    alias: "address",
    describe: "Address to fetch",
    demandOption: true,
    type: "string"
  })
  .help()
  .alias("help", "h").argv;

console.log(argv.address);

const encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=KKhcCAkrb6qMG3p7sGO1ejq7v6poYYGU&location=${encodedAddress}`,
    json: true
  },
  (err, res, body) => {
    if (err) {
      console.log(`Unable to connect to the server`);
    } else if (body.info.statuscode === 400) {
      console.log(`${body.info.messages[0]}`);
    } else if (body.info.statuscode === 0) {
      console.log(
        `Address: ${JSON.stringify(body.results[0].providedLocation.location)}`
      );
      console.log(`Latitude ${body.results[0].locations[0].displayLatLng.lat}`);
      console.log(
        `Longitude ${body.results[0].locations[0].displayLatLng.lng}`
      );
    }
  }
);
