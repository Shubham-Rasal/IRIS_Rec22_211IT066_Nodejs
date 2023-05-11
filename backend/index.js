const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const User = require("./db");
const validate = require("./validate");
const cors = require("cors");
const { boolean } = require("@hapi/joi");

const dbURL = "mongodb+srv://shubham:shubham123@forms-pro.g4unt.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(dbURL, { useNewUrlParser: true });

async function Connect() {

    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to db");

}

Connect();

async function addUser(User) {

    const db = await client.db("Users");
    const collection = await db.collection("Users");
    const p = await collection.insertOne(User);
    console.log(p);

}


async function findUser(username, password) {

    const found = false;


    const db = await client.db("Users");
    const collection = await db.collection("Users");
    collection.find({}).toArray(function (err,result) {
        if (err)
        console.error(err);
        console.log(result);
        
    })
    return found;







}







const port = process.env.PORT || 8000;

app.use(express.static('client'));
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
    console.log(`listening at ${port}`);

});

app.get('/', (req, res) => {
    res.send("Welcome to iris");
});

app.post('/register', (req, res) => {
    console.log(req.body);


    const { error } = validate.validate(req.body);
    if (error)
        res.json(error.details[0]?.message);
    else
        res.json("Successfully Registered.");


    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password[0],
    });
    // addUser(user);
    // res.send("Registered Successfully.");

});
app.post('/login', (req, res) => {
    console.log(req.body);


    const { username, password } = req.body;

    const userFound = findUser(username, password);


});








app.post('/form', (req, res) => {
    console.log(req.body);


    res.json("hello from server");

})




