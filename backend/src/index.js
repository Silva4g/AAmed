const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const fileUpload = require('express-fileupload');

const app = express();

mongoose.connect("mongodb://localhost:27017/tcc", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use(fileUpload());

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);