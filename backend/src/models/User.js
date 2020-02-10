const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    bio: {
        type: String,
        required: true,
    },
    susCard: {
        //tem 15 numeros
        type: String,
        required: true,
        unique: true,
    }
});
module.exports = mongoose.model('User', UserSchema);