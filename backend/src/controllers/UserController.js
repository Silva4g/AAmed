const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

module.exports = {
    //listar usuarios
    async index(req, res) {
        const users = await User.find({}, '-_id');
        return res.send(users);
    }, 
    //cadastro de usuarios
    async store(req, res) {
        try {
            const { name, password, susCard, cpf, bio } = req.body;

            //const { location: url = "", key } = req.file;
            //verificar se tem no banco
            if (await User.findOne({ cpf, susCard })) return res.status(400).send({ error: 'Usuário existente' })
            if (await User.findOne({ susCard })) return res.status(400).send({ error: 'Usuário existente' })

            const user = await User.create({
                password,
                name,
                cpf,
                bio,
                susCard,
                // url,
                // key
            });
            user.password = undefined; //não trazer a senha quando cadastrar
            return res.json({
                user,
                token: generateToken({ id: user.id }) //token para login
            });

        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro: ' + err })
        }

    },
    //login do usuario
    async login(req, res) {
        try {
            const { cpf, password } = req.body;
            const user = await User.findOne({ cpf }).select('+password');
            //verificar se existe e se a senha é igual
            if (!user) {
                res.status(401).send({ error: 'Usuário e/ou senha incorretos!' });
            }

            if (!await bcrypt.compare(password, user.password)) {
                return res.status(401).send({ error: 'Usuário e/ou senha incorretos!' });
            }
            res.send({
                token: generateToken({ id: user.id }) //token para login
            })
        } catch (error) {
            return res.status(400).send({ error: 'Falha no login: ' + err })
        }
    },
    //atualizar dados do usuario
    async update(req, res) {
        try {
            const { name, password, susCard, cpf, bio } = req.body;
            //esses dados não poderão ser alterados
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
};