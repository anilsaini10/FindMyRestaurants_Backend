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
        "Pincode":req.body.pincode
        
    });

    return res.send({ "Success": "done" });
};


module.exports = {

    createRestaurent: createRestaurent


};