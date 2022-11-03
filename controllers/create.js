const { request } = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = require("../URL/url");


const createRestaurent = async (req, res) => {

    console.log(req.body);
    const uri = url;
    const client = new MongoClient(uri);

    const db = client.db("Restaurent");

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


    });

    return res.send({ "Success": "done" });
};


module.exports = {

    createRestaurent: createRestaurent


};