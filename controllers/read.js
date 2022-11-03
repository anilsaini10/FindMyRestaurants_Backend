const { MongoClient, ServerApiVersion } = require('mongodb');
const url = require("../URL/url");


const getAllRestaurent = async (req, res) => {

    console.log(req.body);
    const uri = url;
    const client = new MongoClient(uri);

    const db = client.db("Restaurent");

    // const collection = db.collection("RestaurentList");


    const collection = db.collection('RestaurentList')

    const cursor = collection.find({});
    var data = [];
    await cursor.forEach((item) => {
        // console.log(item);
        data.push(item);
    });

    return res.send({ "data": data });
};


const deleteRestaurent = async (req, res) => {

    const uri = url;
    const client = new MongoClient(uri);

    const db = client.db("Restaurent");

    const collection = db.collection('RestaurentList')

    const cursor = collection.deleteOne({ Name: req.body.Name })
    // var data = [];
    // await cursor.forEach((item) => {
    //     data.push(item);
    // });

    return res.send({ "data": "Done" });
};


module.exports = {

    allRestaturent: getAllRestaurent,
    delete: deleteRestaurent,

};