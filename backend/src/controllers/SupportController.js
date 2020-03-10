const Support = require('../models/Support');

module.exports = {
    async store(req, res) { //cadastrar uma critica
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
    async index(req, res) { //trazer todas as criticas
        try {
            const support = await Support.find();
            return res.json(support);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na listagem' })
        }
    },
    async destroy(req, res) { //apagar critica
        try {
            await Support.findOneAndDelete(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: 'Falha na remoção' })
        }
    }
}