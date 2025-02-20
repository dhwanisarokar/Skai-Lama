const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  userId: mongoose.Schema.Types.ObjectId,
});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
