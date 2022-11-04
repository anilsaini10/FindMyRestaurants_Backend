const express = require('express');

const route = express.Router();


const createPath = require("../controllers/create.js");

const read_path = require("../controllers/read.js");

route.post("/", createPath.createRestaurent);
route.post("/singin",createPath.createOwner);
route.get("/restaurents", read_path.allRestaturent);
route.delete("/delete", read_path.delete);
// route.get("/purchase_and_shipment_details", read_path.purchase_and_shipment_details);


module.exports = route;