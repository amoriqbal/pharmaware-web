const express=require('express');
const url=require('url');
const mongoose=require('mongoose');
const Composition=mongoose.model('composition');


module.exports=(app)=>{
  app.post('/api/search', async (req,res)=>{
    console.log(req.body.search);
      var sRes=await Composition.find({name:req.body.search});
    if(sRes){
      console.log(sRes);
      res.json(sRes);
    }else {
      console.log("********************Error in fetching data from database**********************");
      res.json({err:"composition not found!"});
    }
  });

  /*app.post('/api/posttest',(req,res)=>{
    res.json(req.body);
  });*/

  app.post('/api/add_compo', async (req,res)=>{
    var ncomp=await new Composition(req.body.composition).save().catch(err=>console.log(err.toString()));
    if(ncomp){
      console.log(ncomp);
      res.json({status:200, composition:ncomp});
    }else {
      res.json({status:500, composition:false});
    }
  });
};
