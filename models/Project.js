const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  githubLink: String,
  liveLink: String,
  image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
