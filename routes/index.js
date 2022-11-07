const express = require('express');

const route = express.Router();


const createPath = require("../controllers/create.js");

const read_path = require("../controllers/read.js");

route.get("/", read_path.allRestaturent);
route.post("/form", createPath.createRestaurent);
route.post("/signup", createPath.createOwner);
route.get("/signin", read_path.singin);
route.delete("/delete", read_path.delete);
// route.get("/purchase_and_shipment_details", read_path.purchase_and_shipment_details);


module.exports = route;