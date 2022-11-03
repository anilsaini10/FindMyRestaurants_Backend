const { MongoClient, ServerApiVersion } = require('mongodb');
const url = require("../URL/url");


const getAllRestaurent = async (req, res) => {

    console.log(req.body);
    const uri = url;
    const client = new MongoClient(uri);

    const db = client.db("Restaurent");

    // const collection = db.collection("RestaurentList");

    
    const collection = db.collection('RestaurentList')
   
    const cursor = collection.find({ });
    var data = [];
    await cursor.forEach((item) => {
        // console.log(item);
        data.push(item);
    });

    return res.send({ "data": data });
};


module.exports = {

    allRestaturent: getAllRestaurent,

};