const express=require('express');
const url=require('url');
const mongoose=require('mongoose');
const Books=mongoose.model('books');


module.exports=(app)=>{

  app.get("/search",async (req,res)=>{
    var uselesslen='/search?search='.length;
    var search=req.url.substring(uselesslen);

    var book=await Books.find({tags:search});
    console.log(book);
    res.send(book||false);
  });

  app.get("/addtodb",(req,res)=>{
    new Books({name:"book2",type:"pdf",tags:["b","c"],download_link:"google.com"}).save();
    res.redirect("/");
  });
};
