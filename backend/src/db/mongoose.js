// To connect to database

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/open-mic-api', { useNewUrlParser: true });