const path = require("path");
const express = require("express");
const request = require("request");
const hbs = require("hbs");
const geocode = require("../weatherApp/utils/geocode");
const forecast = require("../weatherApp/utils/forecast");

const app = express();
const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

app.set("view engine", "hbs");
app.set("views", "src/views");

app.get("", (req, res) => {
  res.render("index", {
    title: "INDEX HBS",
    name: "Sumbans"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// weatehr end point to be used in front end
app.get("/weather", (req, res) => {
  console.log(req.query.address);
  geocode(req.query.address, (err, data) => {
    if (err) {
      return res.send({ error: err });
    }

    forecast(data.center[0], data.center[1], (err, forecastData) => {
      if (err) {
        return res.send({ error: err });
      } else {
        res.send({
          Place: data.place_name,
          Temprature: forecastData
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(port + " is running!");
});
