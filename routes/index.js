const express = require('express');
const router = express.Router();
const FarmerDetails = require('../models/db').FarmerDetails;

// DIFFERENT ROUTES 
router.get('/',(req,res)=>{
    console.log(__dirname + "/home.html");
    res.sendFile(__dirname + '/home.html');
})

router.post("/farmerDetails", function (req, res) {  
  const farmerDetail = new FarmerDetails({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      farmSize:req.body.farmSize,
      email:req.body.email,
      phoneNo :req.body.phone,
      irrigationType:req.body.irrigationType,
      
  });
  farmerDetail.save(function (err) {
      if (err) {
          throw err;
      } else {
        res.render('farmerDetails.html');
      }
  });
});

router.post("/login",(req,res)=> {

    
    res.sendFile(__dirname + "/previous/farmerDetails");
    
})





module.exports = router;