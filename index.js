
//App and routing
const express=require('express');
const axios=require('axios');
const bodyParser=require('body-parser');
const path=require("path");
//mongodb
require('./services/mongodb_util');
require('./models/Books');
require('./models/Composition');

//port
const port=process.env.PORT || 5000;

//express app created
const app=express();

//app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//routes
app.use(express.static("./react-client/build"));
app.get('/test',(req,res)=>res.send("Hello World"));
require('./routes/api')(app);
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'react-client','build','index.html'));
  }
);
//Start listening
app.listen(port,()=>console.log("Backend listening"));
