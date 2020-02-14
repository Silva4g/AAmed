const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
        select: false //quando for listar os users, a senha não é mostrada
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
    },
    image:{
        type:String,
        required: true
    }
});

//antes de salvar no banco, faz um hash na senha para encriptar
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});
module.exports = mongoose.model('User', UserSchema);