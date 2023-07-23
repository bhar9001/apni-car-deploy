const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

app.use(express.static("https://admirable-meerkat-a14a26.netlify.app/build"));

// Serve the index.html file for all non-API routes
app.get("*", (req, res) => {
  res.sendFile("https://admirable-meerkat-a14a26.netlify.app/build/index.html");
});

// MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
