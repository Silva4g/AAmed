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
        type: String,
        required: true,
        unique: true,
    },
    // url: {
    //     type: String,
    // },
    // key: {
    //     type: String,
    // }
});

UserSchema.pre('save', async function (next) {
    // if (this.url === '') {//se a imagem não for salva no awss3, será salvo no local e trará essa url:
    //     this.url = `http://localhost:3333/files/${this.key}`;
    // }
    //antes de salvar no banco, faz um hash na senha para encriptar
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});
module.exports = mongoose.model('User', UserSchema);