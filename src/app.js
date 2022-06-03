
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const speciesController = require("./controller/speciesController");

// GET
app.get("/api/specie", speciesController.getAllSpecies);

// POST
app.post("/api/specie", speciesController.createSpecie);


module.exports = app;
