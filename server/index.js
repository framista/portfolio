const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const project = require('./routes/project');

mongoose.connect('mongodb://localhost/portfolio')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB ', err))

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/projects', project);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));