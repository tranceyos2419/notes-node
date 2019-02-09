const yargs = require("yargs");
const geo = require("./geocode/geocode");

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

geo.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(`errorMessage: ${errorMessage}`);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
