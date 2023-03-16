const express = require('express');
const router = express.Router();
const controller = require("./controllers.js");


router.get("/", controller.getAllCities);

router.get("/:CitiesId", controller.getOneCity );

router.post("/", controller.createCity);

router.patch("/:CitiesID", controller.updateCity);

router.delete("/:citiesId", controller.deleteCity);


module.exports = router;

