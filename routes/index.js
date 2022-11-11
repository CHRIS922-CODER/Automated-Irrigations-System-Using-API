const express = require('express');
const router = express.Router();
const FarmerDetails = require('../models/db').FarmerDetails;
const UserCredentials = require('../models/db').UserCredentials;

// DIFFERENT ROUTES
// To the login page
router.get('/',(req,res)=>{
    // console.log(__dirname + "/home.html");
    res.render("login");
})

router.post('/login',(req,res)=>{

	var username = req.body.username;
	var password = req.body.password;

  var results = UserCredentials.find({username: username, password: password})
  if(results){
    res.render("home");
  }else{
    res.redirect('/login');
  }


});

 
// To the register page
   router.post("/register",(req,res)=>{
    const userCredentials = new UserCredentials({
      username : req.body.username,
      password : req.body.password,
    });

    
          // call the database and insert the credentials
          userCredentials.save((err)=>{
            if(err){
              return err;
            }else{
              res.render("farmerDetails")
            }
          })

	  }
   );

  router.get("/register",(req,res)=>{
	  res.render("register");
  }
  );

// To the farmerDetails page
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
        res.render('home');
      }
  });
});






module.exports = router;

