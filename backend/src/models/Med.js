const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const MedSchema = new mongoose.Schema({
  hospital_username: String,
  name: String,
  hosps: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('Med', MedSchema)