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
        "Pincode":req.body.pincode
        
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