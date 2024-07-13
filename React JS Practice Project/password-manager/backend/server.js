const { MongoClient } = require('mongodb');
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
var bodyParser = require('body-parser')
require('dotenv').config()
console.log(process.env.MONGO_URI)
app.use(cors())
app.use(bodyParser.json())
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';
client.connect();
console.log('Connected successfully to server');



//  GET API
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    res.json(findResult)
})


//POST API (Save a password)
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.insertOne(password)
    console.log('Found documents =>', findResult);
    res.send({ success: true, result: findResult })
})

// DELETE API 
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.deleteOne(password)
    console.log('Found documents =>', findResult);
    res.send({ success: true, result: findResult })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})