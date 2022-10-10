const express = require("express");
const { createTour } = require("../controllers/tour/createTour");
const { getAllTour } = require("../controllers/tour/getAllTour");
const router = express.Router();

router.route("/").get(getAllTour).post(createTour);

// router.route("/:id").get()

module.exports = router;
