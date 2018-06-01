var mongoose = require('mongoose');  
var ProductSchema = new mongoose.Schema({
  title: String,
  price: number,
  category: String,
  imageUrl: String
});
mongoose.model("product", ProductSchema);
module.exports = mongoose.model('product');