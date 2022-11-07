const { request } = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = require("../URL/url");
const uri = url;
const client = new MongoClient(uri);

const db = client.db("Restaurent");
const createRestaurent = async (req, res) => {

    console.log(req.body);

    if (req.body.name == "" || req.body.address == "" || req.body.contact == "" || req.body.shop_name == "" ||
        req.body.pincode == "" || req.body.city == "" || req.body.state == "" || req.body.type_of_restaurent == "" || req.body.timing == "") {

        return req.send({ "Error": "Invalid Inputs" });
    }

    const collection = db.collection("RestaurentList");

    await collection.insertOne({

        "Name": req.body.name,
        "Address": request.body.address,
        "Contact": req.body.contact,
        "ShopName": req.body.shop_name,
        "Pincode": req.body.pincode,
        "City": request.body.city,
        "State": request.body.state,
        "Type_Of_Restaurent": request.body.type_of_restaurent,
        "Timing": request.body.timing,
        "Image": request.body.url

    });

    return res.send({ "Success": "done" });
};

const createOwner = async (req, res) => {

    if (req.body.Username == "" || req.body.Password == "" || req.body.Username == null || req.body.Password == null || req.body.Username == undefined || req.body.Password == undefined) {
        return req.send({ "Error": "Invalid Inputs" });
    }

    const resturentOwner = db.collection("resturentOwner");

    await resturentOwner.insertOne({
        "Username": req.body.Username,
        "Password": req.body.Password,
    });

    return res.send({ "Success": "User Is Created" });
};


module.exports = {

    createRestaurent: createRestaurent,
    createOwner: createOwner,

};