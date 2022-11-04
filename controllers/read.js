const { MongoClient, ServerApiVersion } = require('mongodb');
const url = require("../URL/url");

const uri = url;
const client = new MongoClient(uri);

const db = client.db("Restaurent");

const getAllRestaurent = async (req, res) => {

    // const uri = url;
    // const client = new MongoClient(uri);

    // const db = client.db("Restaurent");

    // const collection = db.collection("RestaurentList");


    const collection = db.collection('RestaurentList')

    const cursor = collection.find();
    var data = [];
    await cursor.forEach((item) => {
        // console.log(item);
        data.push(item);
    });

    return res.send({ "data": data });
};


const deleteRestaurent = async (req, res) => {


    const collection = db.collection('RestaurentList')

    const cursor = collection.deleteOne({ Name: req.body.Name })

    return res.send({ "data": "Done" });
};

const singin = async (req, res) => {


        if (req.body.Username == "" || req.body.Password == "" || req.body.Username == null || req.body.Password == null || req.body.Username == undefined || req.body.Password == undefined) {
            req.send({ "Error": "Invalid Inputs" });
        }

        const user = db.collection("resturentOwner");

        const cursor = user.find({ "Username": req.body.Username });
        var data = [];
        await cursor.forEach((item) => {
            data.push(item);
        });

        console.log(data[0].Password+"And"+ req.body.Password)

        if (data[0].Password != req.body.Password) {
            
            return res.send({ "Error": "Invalid Username and Password", "Status": 200 });
        }
        return res.send({ "Success": "Signin Successfully", "Status": 200 });

}

module.exports = {

    allRestaturent: getAllRestaurent,
    delete: deleteRestaurent,
    singin: singin,

};