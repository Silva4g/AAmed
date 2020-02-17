require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect("mongodb://localhost:27017/tcc", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.listen(3333);