const { Project } = require('../models/project');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await Project.find().sort('grade');
    res.send(projects);
})

module.exports = router;