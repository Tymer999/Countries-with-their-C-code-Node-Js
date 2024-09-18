const mongoose = require("mongoose")

const countrySchema = mongoose.Schema({
    name: {
        require: true,
        type: String,
    },
    code: {
        type: String,
        require: true
    },
    currency: {
        type: String,
        require: true,
    }
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;