const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const { name, email, password, susCard } = req.body;

            if (await User.findOne({ email })) return res.status(400).send({ error: 'Usuário existente' })
            if (await User.findOne({ susCard })) return res.status(400).send({ error: 'Usuário existente' })

            // const location = {
            //     type: 'Point',
            //     coordinates: [longitude, latitude],
            // }

            const user = await User.create({
                email,
                name,
                password,
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
            const { name, latitude, longitude, email, password, susCard } = req.body;

            if (email || password || susCard) return res.status(400).send({ error: 'Esses dados não podem ser atualizados' });

            const user = await User.findByIdAndUpdate(req.params.id, {
                name,
                latitude,
                longitude
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