const mongoose = require("mongoose");

const bodySchema = new mongoose.Schema({
  image_URL: String,
  category: String,
  title: String
});

module.exports = mongoose.model("body", bodySchema);