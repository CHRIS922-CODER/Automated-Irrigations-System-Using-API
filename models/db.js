const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/autoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const farmerDetailsSchema = {
    firstName: String,
    lastName: String,
    farmSize:Number,
    email:String,
    phone:Number,
    areaCode:Number,
    irrigationType:String, 

  };

  const FarmerDetails = mongoose.model("farmerDetails", farmerDetailsSchema);

  module.exports = FarmerDetails;