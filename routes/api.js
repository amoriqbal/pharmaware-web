const express=require('express');
const url=require('url');
const mongoose=require('mongoose');
const Composition=mongoose.model('composition');
const fs=require('fs');

module.exports=(app)=>{
  app.post('/api/search', async (req,res)=>{
    console.log(req.body.search);
    if(req.body.search.length===0)
      res.json([]);
    var sRes=await Composition.find({name:{$regex: '.*'+req.body.search+'.*' ,$options:"six"}});
    if(sRes){
      console.log(sRes);
      res.send(sRes);
    }else {
      console.log("********************Error in fetching data from database**********************");
      res.json({err:"composition not found!"});
    }
  });

  /*app.post('/api/posttest',(req,res)=>{
    res.json(req.body);
  });*/

  /*app.post('/api/add_compo', async (req,res)=>{
    var ncomp=await new Composition(req.body.composition).save().catch(err=>console.log(err.toString()));
    if(ncomp){
      console.log(ncomp);
      res.json({status:200, composition:ncomp});
    }else {
      res.json({status:500, composition:false});
    }
  });

  app.get('/api/batchadd',async (req,res)=>{
    var dat=JSON.parse(fs.readFileSync("./routes/res.json").toString());
//    for d in dat{
//      console.log(JSON.stringify(d));
//    }
    for (i=0;i<dat.length;i++){
      await new Composition(dat[i]).save().catch(err=>console.log(err.toString()));
    }
    res.send("hello man");
  });*/
};
