const express = require("express")
const mongoose = require("mongoose")
const countryRouter = require("./routes/country.route.js")

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/countries", countryRouter);

app.get("/", (req, res) => {
    res.send("Hello from node api")
})

mongoose.connect("mongodb+srv://tymer054833:LzRMwpP2clxLAq31@countrydb.pm0ol.mongodb.net/Countries?retryWrites=true&w=majority&appName=countryDB").then(() => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    })
    console.log("Connected to Database");    
}).catch(() => {
    console.log("Connection failed");
})