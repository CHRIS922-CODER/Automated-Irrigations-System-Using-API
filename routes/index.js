const express = require('express');
const router = express.Router();

// DIFFERENT ROUTES 
router.get('/',(req,res)=>{
    res.send(`<h1>Automated Irrigation System Using API`);
})







module.exports = router;