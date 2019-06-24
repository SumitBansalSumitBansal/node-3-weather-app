//MapBox API
const request = require("request");

const geocode = (address, cb) => {
  const APIUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic3VtYmFucyIsImEiOiJjang3eTVxdHgwZTV4M29vdHJ5amp6aWkwIn0.e8hNc_yr-Lils87c18FLKg";

  request({ url: APIUrl, json: true }, (err, response) => {
    if (err) {
      cb("Please check your internet connection!!", undefined);
    } else if (response.body.features.length == 0) {
      cb(
        "Invalid location, Please make sure you entered correct location",
        undefined
      );
    } else {
      cb(undefined, {
        place_name: response.body.features[1].place_name,
        center: response.body.features[0].center
      });
    }
  });
};

module.exports = geocode;
