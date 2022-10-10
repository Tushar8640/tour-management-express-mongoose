const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());


// declear routes

const tourRoute = require("./routes/tourRoute")
// const productRoute= require('./routes/product.route')


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// use routes 
app.use('/api/v1/tour',tourRoute)

module.exports = app;