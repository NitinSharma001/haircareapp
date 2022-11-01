const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
  name: {
    type: String,
    required:true
   
  },

  street: {
    type: String,
    required:true

  },
  city: {
    type: String,
    required:true

  },
  state: {
    type: String,
    required:true

  },
  zip: {
    type: Number,
    required:true

  },
  country: {
    type: String,
    required:true

  },
  mobile: {
    type: Number,
    required:true

  },
  email: {
    type: String,
    required:true

  },
});
const Delevery = mongoose.model("address", addressSchema);
module.exports = Delevery;
