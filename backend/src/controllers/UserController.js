const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const { name, email, susCard, cpf, bio } = req.body;

            if (await User.findOne({ email })) return res.status(400).send({ error: 'Usuário existente' })
            if (await User.findOne({ susCard })) return res.status(400).send({ error: 'Usuário existente' })

            const user = await User.create({
                email,
                name,
                cpf,
                bio,
                susCard
            });

            return res.json(user);

        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro' })
        }

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
            const { name, password, susCard, cpf } = req.body;

            if (password || susCard || cpf) return res.status(400).send({ error: 'Esses dados não podem ser atualizados' });

            const user = await User.findByIdAndUpdate(req.params.id, {
                name,
                bio
            }, { new: true });

            return res.json(user);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na atualização do usuário' })
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