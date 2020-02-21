const Support = require('../models/Support');

module.exports = {
    async store(req, res) {
        try {
            const { email, subject, description } = req.body;

            const support = await Support.create({
                email,
                subject,
                description
            });
            return res.json({
                support,
            });

        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro: ' + err })
        }

    },
    async index(req, res) {
        try {
            const support = await Support.find();
            //user.password = undefined;
            return res.json(support);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na listagem' })
        }
    },
    async destroy(req, res) {
        try {
            await Support.findOneAndDelete(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: 'Falha na remoção' })
        }
    }
}