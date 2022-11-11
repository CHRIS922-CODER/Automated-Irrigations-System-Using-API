if(process.env.NODE_ENV !== 'production'){
    require('dotenv').parse;
    
}

const express = require('express');
const app = express();
const indexRouter = require("./routes/index");
const bodyParser = require("body-parser");





// MIDDLEWARES
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine','ejs');
app.set('views',__dirname +"/views");
app.use('/',indexRouter);
app.use(express.static('public'));


app.listen(process.env.PORT || 8001,()=>{
    console.log('Listening on port 8001........');
})