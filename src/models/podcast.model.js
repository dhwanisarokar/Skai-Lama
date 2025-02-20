const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
  name: String,
  transcript: String,
  projectId: mongoose.Schema.Types.ObjectId,
  uploadDate: { type: Date, default: Date.now },
});
const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
