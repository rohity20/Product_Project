const express = require("express")
const app = express()
const cors = require('cors')
app.use(express.json());

// Route Imports
const product = require("./routes/productRoute");

//use cors
app.use(cors());

app.use("/api/v1", product);

module.exports = app