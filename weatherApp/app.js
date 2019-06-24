const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

//1 darkSky - forecast

//1 MapBox - geocode
// user input placeName, pass to the API url ang get long and lattitude
// pass long and lat to the forecast
// handle errors and use cbs

//geoode(address, cb)

const address = process.argv[2];

if (!address) {
  return console.log(
    "PLease provide the address as an argumnet to the node app.js <address>"
  );
}

geocode(address, (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log("Place is: ", data.place_name);

  forecast(data.center[0], data.center[1], (err, forecastData) => {
    if (err) {
      return console.log(err);
    }
    console.log("Temparature is: " + forecastData);
  });
});
