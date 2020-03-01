const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    github: {type: String, required: true},
    live: {type: String, required: true},
})

const Project = mongoose.model('Project', projectSchema);
exports.Project = Project;