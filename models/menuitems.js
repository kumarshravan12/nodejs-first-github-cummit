const mongoose = require('mongoose')

//make a shema for menu items 

const meitemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingrediedients:{
        type:[String],
        daefult:[]
    },
    num_sales :{
        type:Number,
        default:0
    }


})


// now export the data 

const menuitems = mongoose.model('menuitems',meitemsSchema);

module.exports = menuitems;