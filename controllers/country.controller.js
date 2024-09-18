const Country = require("../models/country.model.js");

const addCountry = async (req, res) => {
  try {
    const country = await Country.create(req.body);

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findById(id);

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCountry = async (req, res) => {
  try {
    const id = req.params.id;

    const country = await Country.findByIdAndUpdate(id, req.body);

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    const updateCountry = await Country.findById(id);

    return res.status(200).json(updateCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findByIdAndDelete(id);

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    return res.status(200).json({ message: "Country deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    addCountry,
    getCountries,
    getCountry,
    updateCountry,
    deleteCountry
}
