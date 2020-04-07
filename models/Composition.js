const mongoose=require('mongoose');
const ProductSchema=require('./Product.js');

CompositionSchema=mongoose.Schema({
  name:String,
  Products:[ProductSchema]
});

mongoose.model('composition',CompositionSchema);
