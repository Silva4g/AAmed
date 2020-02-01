const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const { name, email, password, latitude, longitude, susCard } = req.body;

            if (await User.findOne({ email })) return res.status(400).send({ error: 'Usuário existente' })
            if (await User.findOne({ susCard })) return res.status(400).send({ error: 'Usuário existente' })

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            const user = await User.create({
                email,
                name,
                password,
                location,
                susCard
            });

            return res.json(user);

        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro' })
        }

    },
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },
    async update(req, res) {
        const { name, latitude, longitude, email, password, susCard } = req.body;

        if (email, password, susCard) return res.status(400).send({ error: 'Não pode atualizar esses dados' });
        const user = await User.findByIdAndUpdate(req.params.id, {
            name,
            latitude,
            longitude
        }, { new: true });

        return res.json(user);
    },
    async destroy(req, res) {
        await User.findOneAndDelete(req.params.id);
        return res.send();
    }
};