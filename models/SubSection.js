const mongoose = require("mongoose");

const subSectionSchame = new mongoose.Schema({
  title: {
    type: String,
  },
  timeDescription: {
    type: String,
  },
  desctiption: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

module.exports = mongoose.model("SubSection", subSectionSchame);
