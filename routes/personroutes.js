const express = require('express');
const router = express.Router();

const person = require('./../models/person'); // ya jo person wala schema banay hi usko connect krenge server se 


//POST route to add a person
router.post('/', async function(req,res){
    try{
        const data = req.body; //Assuming the request body containes the person data
        //create a new person document using the mongoose model
        const newperson = new person(data);

        //save the new person data in databse 
        const responce = await newperson.save();
        console.log('data saved');
        res.status(200).json(responce);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});

    }
})


// get method to get the data of person 

router.get('/',async (req,res) => {
    try{
      const data = await person.find();
      console.log('data fatched');
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"})
  
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

  // upadte the data of person

  router.put('/:id', async function(req,res){
    try{
      const personId = req.params.id; // find the id from url parameter 
      const updatedpersonData = req.body; // upadte data from person

      const responce = await person.findByIdAndUpdate(personId,updatedpersonData,{
        new:true, // return the updated document 
        runValidators:true // run mongoose validation 
      })

      if(!responce){
        return res.status(404).json({error:"person not found "});
      } 
      console.log('data upadted');
      res.status(200).json(responce); 

    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })


  // delete the data of person 

  router.delete('/:id', async function(req,res){
    try{
      const personId = req.params.id; // find karega person ka id jisko delete karna hi database se 

      const responce = await person.findByIdAndDelete(personId); 

      // ho sakta hi jo id server me de raha ho wo id mile hi na 
      if(!responce){
        return res.status(500).json({error:"person not found "})
      }

      console.log("data deleted");
      res.status(200).json({message:"person deleted successfully"});

    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});

    }
  })

  //export the router 
  module.exports = router;