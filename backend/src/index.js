const express = require('exoress');
const mongoose = require('mongoose');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({ origin: 'https://localhost:3000' }));
app.use(express.json());
app.use(routes);

app.listen(3333);