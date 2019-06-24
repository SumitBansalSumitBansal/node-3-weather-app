// Darksky API
const request = require("request");

const forecast = (lng, lat, cb) => {
  const APIUrl =
    "https://api.darksky.net/forecast/9ef1b99c8cda620640d11bab42484f84/" +
    lng +
    "," +
    lat;

  request({ url: APIUrl, json: true }, (err, response) => {
    // console.log(data);
    if (err) {
      cb("Please check your internet connection!!", undefined);
    } else if (response.body.error) {
      cb(response.body.error, undefined);
    } else {
      cb(undefined, response.body.currently.temperature);
    }
  });
};

module.exports = forecast;
