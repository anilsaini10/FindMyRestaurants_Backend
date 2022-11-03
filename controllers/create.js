const { request } = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = require("../URL/url");
const uri = url;
    const client = new MongoClient(uri);

    const db = client.db("Restaurent");
const createRestaurent = async (req, res) => {

    console.log(req.body);
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
const createOwner= async (req,res)=>{
    const resturentOwner=db.collection("resturentOwner");

    await resturentOwner.insertOne({
        "ownerName":req.body.name,
        "contact":req.body.number,
    });
    return res.send({"Success":"Done"});
};


module.exports = {

    createRestaurent: createRestaurent,
    createOwner:createOwner
};