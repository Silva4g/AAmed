const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

module.exports = {
    async store(req, res) {
        try {
            const { name, password, susCard, cpf, bio } = req.body;

            if (await User.findOne({ cpf })) return res.status(400).send({ error: 'Usuário existente' })
            if (await User.findOne({ susCard })) return res.status(400).send({ error: 'Usuário existente' })

            const user = await User.create({
                password,
                name,
                cpf,
                bio,
                susCard
            });

            return res.json({
                user,
                token: generateToken({ id: user.id })
            });

        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro: ' + err })
        }

    },
    async login(req, res) {
        const { cpf, password } = req.body;
        const user = await User.findOne({ cpf }).select('+password');

        if (!user) {
            res.status(401).send({ error: 'Usuário não encontrado' });
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).send({ error: 'Senha inválida' });
        }
        user.password = undefined;
        res.send({
            user,
            token: generateToken({ id: user.id })
        })
    },

    async index(req, res) {
        try {
            const user = await User.find();
            user.password = undefined;
            return res.json(user);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na listagem' })
        }
    },
    async update(req, res) {
        try {
            const { name, password, susCard, cpf, bio } = req.body;

            if (password || susCard || cpf) return res.status(400).send({ error: 'Esses dados não podem ser atualizados' });

            const user = await User.findByIdAndUpdate(req.params.id, {
                name,
                bio
            }, { new: true });

            return res.json(user);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na atualização do usuário' + err })
        }

    },
    async destroy(req, res) {
        try {
            await User.findOneAndDelete(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: 'Falha na remoção do usuário' })
        }
    }
};