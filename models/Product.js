const mongoose=require ('mongoose');


ProductSchema=new mongoose.Schema({
  name:String,
  quantity:String,
  mrp:Number,
});

module.exports=ProductSchema;
