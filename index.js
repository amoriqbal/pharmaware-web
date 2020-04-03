
//App and routing
const express=require('express');
const axios=require('axios');
const bodyParser=require('body-parser');
//mongodb
require('./services/mongodb_util');
require('./models/Books');

//port
const port=process.env.PORT || 5000;

//express app created
const app=express();
//app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//app.use(bodyParser.json());

//routes
app.use(express.static("public"));
app.get('/test',(req,res)=>res.send("Hello World"));
app.get("/",(req,res)=>res.sendFile(__dirname+"/public/index.html"));
require('./routes/home.js')(app);
//Start listening
app.listen(port,()=>console.log("Backend listening"));
