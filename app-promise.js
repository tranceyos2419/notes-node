const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .option("a", {
    alias: "address",
    describe: "Address to fetch",
    demandOption: true,
    type: "string"
  })
  .help()
  .alias("help", "h").argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=KKhcCAkrb6qMG3p7sGO1ejq7v6poYYGU&location=${encodedAddress}`;

axios
  .get(geocodeURL)
  .then(res => {
    console.log(`status`, res.data.status);
    if (res.data.status === "ENOTFOUND") {
      throw new Error();
    }
    console.log(res.data.results[0].providedLocation.location);
    const lng = res.data.results[0].locations[0].displayLatLng.lng;
    const lat = res.data.results[0].locations[0].displayLatLng.lat;
    return axios.get(
      `https://api.darksky.net/forecast/e65929a5bb478a78781b80c52f230d47/${lat},${lng}`
    );
    //* Nesting Promise
    //   .then(response => {
    //     console.log("temperature: ", response.data.currently.temperature);
    //   })
  })
  //* Chaining Promise
  .then(response => {
    console.log("temperature: ", response.data.currently.temperature);
  })
  .catch(e => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to API server");
    } else {
      console.log("message:", e.message);
    }
  });
