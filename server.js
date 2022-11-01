if(process.env.NODE_ENV !== 'production'){
    require('dotenv').parse;
    
}

const express = require('express');
const app = express();
const indexRouter = require("./routes/index");
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/autodb",{useNewUrlParser:true});
const db = mongoose.connection
db.on('error',error => console.error(error))
db.once('open',()=> console.log('Connected to Mongoose'));


// MIDDLEWARES
app.set('view engine','ejs');
app.set('views',__dirname +"/views");
app.use('/',indexRouter);
app.use(express.static(__dirname +'../public'));











app.listen(process.env.PORT || 8001,()=>{
    console.log('Listening on port 8001........');
})