const yargs = require("yargs");
const geo = require("./geocode/geocode");
const weather = require("./weather/weather");

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

const showResults = (errorMessage, results) => {
  if (errorMessage) {
    console.log(`errorMessage: ${errorMessage}`);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
};

let res = geo.geocodeAddress(argv.address, showResults);
console.log(`res ${res}`);
// .then(results => {
//   weather.getWeather(results.latitude, results.longitude, showResults);
// });
