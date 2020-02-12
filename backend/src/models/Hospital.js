const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const HospitalSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    cnes: {
        //7 numeros
        type: String,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    cnpj: {
        //tem 14 numeros
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Hospital', HospitalSchema);