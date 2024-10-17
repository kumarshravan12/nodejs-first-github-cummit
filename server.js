// function add(a,b){
//     return a+b;
// }

//  var result = add(8,2);
//  console.log(result);// yaha pr dusara number print karane ke lia bar bar data change karo then run karo tab print hoga 

 // but when you will  install in your js file nodemon then automatecally your data are refalect


// console.log("server file is running....");




//convert object to json string 

// const objectToConvert = {
//     name :"sharavn",
//     age : 80,
// };

// const json = JSON.stringify(objectToConvert); // convert object to Json strng
// console.log(json);

// console.log(typeof json); 


// make a serevr 
const express = require('express')
const app = express();

const db = require('./db'); // connection wala hi ye 

require('dotenv').config();


//body- parser 

const bodyparser = require('body-parser');
app.use(bodyparser.json());  //return req.body



app.get('/', function (req, res) {
  res.send('Hello World ')
})




// app.get('/chicken',function(req ,res)  {
//     res.send("i would love to serve chicken")
// })


// app.get('/idli',function(req,res){

//   const customized_idli = {
//     name:"ravan idli",
//     size :'10 cm',
//     is_sambhar:true,
//     is_chuteny :false
//   }
//   res.send(customized_idli);
// })


// app.post('/items',function(req,res){
//   console.log("data is saved");
// })

// app.post('/items',function(req,res){
//   res.send("data is saved");
// })



// import the person  router fle in main server 
const personroute = require('./routes/personroutes');
//use the routters
app.use('/person',personroute);



// import the menuItem router file in main server
const menuItemRoutes = require('./routes/menuItemRoutes');
//use the routters
app.use('/menuItems',menuItemRoutes);

app.listen(3000,()=>{
  console.log("server lisining on port 3000")
})