const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    location: {
        type: PointSchema,
        index: '2dsphere'

    },
    susCard: {
        //tem 15 numeros
        type: String,
        required: true,
        unique: true,
    }
});
module.exports = mongoose.model('User', UserSchema);