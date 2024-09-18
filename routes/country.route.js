const express = require("express")
const router = express.Router();
const { addCountry, getCountries, getCountry, updateCountry, deleteCountry } = require("../controllers/country.controller.js")

router.post("/", addCountry);

router.get("/", getCountries);

router.get("/:id", getCountry);

router.put("/:id", updateCountry);

router.delete("/:id", deleteCountry);


module.exports = router;