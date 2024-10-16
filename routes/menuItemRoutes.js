const express = require('express');
const router = express.Router();

const menuItems = require('../models/menuitems');  // ya jo menuitem wala schema banay hi usko connect krenge server se 
// POST route add a menuItems data 
router.post('/', async function(req,res){
    try{
      const data = req.body
      const newMenuItems = new menuItems(data);
      const responce = await newMenuItems.save();
  
      console.log('data saved');
      res.status(500).json(responce)
    }catch(err){
      console.log(err);
      res.status(500).json({erroe:"internal server error"});
    }
  
  })
  


// get method from menuItems 
router.get('/', async function(req,res){
    try{
      const data = await menuItems.find();
      console.log('data fatched');
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })



//exterect the work type from the url parameter 

router.get('/:workType',async function(req,res){
    try{
      const workType = req.params.workType; // that is the main part 
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const responce = await person.find({work:workType});
        console.log('responce fatched');
        res.status(200).json(responce);
      }else{
        res.status(404).json({error:'invalid work type'});
      }
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:"invalid server error"});
    }
  })

  
  //export the router 
  module.exports = router;