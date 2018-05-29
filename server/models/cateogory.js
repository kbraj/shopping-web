var mongoose = require('mongoose');  
var CateogorySchema = new Schema({
  name:String
});
mongoose.model("category", CateogorySchema);
module.exports = mongoose.model('category');