const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://admin:11235813@cluster0-du8af.mongodb.net/project3?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(4242);