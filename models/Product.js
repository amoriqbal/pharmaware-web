const mongoose=require ('mongoose');


ProductSchema=new mongoose.Schema({
  name:String,
  brand:String,
  mrp:Number,
});

module.exports=ProductSchema;
