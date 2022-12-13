const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  [{
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
 
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
  },
  featured: {
    type: Boolean,
    
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    required: [true, "Please Enter Company name"]
  }
}]);

module.exports = mongoose.model("Product", productSchema);
