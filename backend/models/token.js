const mongoose = require("mongoose");
const TokenSchema = mongoose.Schema({
  name: {
    type: String,
    required:true
   
  },

  token: {
    type: String,
    // required:true

  },
//   price: {
//     type: Number,
//     required:true

//   }
  
});
const Token = mongoose.model("token", TokenSchema);
module.exports = Token;
