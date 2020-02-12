const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const bcrypt = require('bcryptjs');

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
HospitalSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});
module.exports = mongoose.model('Hospital', HospitalSchema);