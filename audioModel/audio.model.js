const mongoose = require("mongoose");

const audioSchema = mongoose.Schema(
  { audio: String, date: String, time: String },
  { timestamps: true, versionKey: false }
);

const AudioModel=mongoose.model("audio",audioSchema);

module.exports={AudioModel}