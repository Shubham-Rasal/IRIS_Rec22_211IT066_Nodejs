const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const User = require("./db");


const Joi=require("@hapi/joi");

const validateSchema=Joi.object({
    name:Joi.string().min(6),
    email:Joi.string().min(6).email(),
    password:Joi.string().allow("").min(6),
    date:Joi.date(),
    _id:Joi.object(),
});












const dbURL = "mongodb+srv://shubham:shubham123@forms-pro.g4unt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const client = new MongoClient(dbURL, { useNewUrlParser: true });

async function Connect() {

    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to db");
    
}

Connect();

async function addUser(User){

    const db = await client.db("Users");
    const collection = await db.collection("Users");
    const p= await collection.insertOne(User);
    console.log(p);

}








const port = process.env.PORT || 8000;

app.use(express.static('client'));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({extended:false}));


app.listen(port, () => {
    console.log(`listening at ${port}`);

});

app.get('/', (req, res) => {
    res.send("Welcome to iris");
});

app.post('/register', (req, res) => {
    // console.log(req);
    
    
    const validation = validateSchema.validate(req.body);
    res.send(validation.error);
    
    
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password[0],
    });
    // console.log(user._id);
    // addUser(user);
    res.send("Registered Successfully.");

})




