const mongoose = require('mongoose');


//define the person schema 
const personSchema = new mongoose.Schema({
    name :{
        type:String,
        require : true
    },
    age:{
        type: Number,
    },
    work:{
        type:String,
        enum :['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true, // iska matab hi bina isko fill kare user submit nhi kr sakta hi form ko 
        unique:true // iska matlab hi hr person ka email unqiue hona cheyiea 
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
});

// abb shema banane ke bad ke model bana hi 

//create person model 
const person = mongoose.model('person',personSchema);
module.exports = person;