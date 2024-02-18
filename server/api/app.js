const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express(); // creates an express app

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json()); // parse the request body and convert it into json
app.use(express.urlencoded());
app.use(cors());

routes(app);

module.exports = app;