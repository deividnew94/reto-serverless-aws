
//const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const speciesController = require("./controller/speciesController");

app.get("/api/species", speciesController.getAllSpecies);
app.post("/api/specie", speciesController.createSpecie);


app.listen(3000, () => console.log(`Listening on: 3000`));
//module.exports.handler = serverless(app);