// this file only for responsible for establising a connection between your Node.js application nad your MongoDB database 
// using the Mongoose Library .....


const mongoose = require("mongoose");

//define the mongodb connection url 
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabse' with your database name 

//set up MongoDB  connection 
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology :true
})


//get the default connection 
//Mongoose maintain a defulat connection object repersenting the MongoDB connection 
const db = mongoose.connection;

//define event listernes for database connection 
db.on('connected' ,() =>{
    console.log('Connected to MongoDB server ');
});

db.on('error',(err)=>{
    console.error('MongoDB Connection error',err);
});

db.on('Disconnected' ,()=>{
    console.log('MongoDB Disconnected');
});

//Export the database connection 
module.exports = db;
