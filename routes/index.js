const express = require('express');

const route = express.Router();


const createPath = require("../controllers/create.js");

const read_path = require("../controllers/read.js");

route.post("/", createPath.createRestaurent);
route.post("/suraj",createPath.createOwner);
// route.get("/purchase_and_shipment_details", read_path.purchase_and_shipment_details);


module.exports = route;