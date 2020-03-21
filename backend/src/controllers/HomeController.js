const Hospital = require('../models/Hospital');

module.exports = { //quando o hospital está logado, traz todas as informações
    async home(req, res) {
        try {
            const hospital_id = req.hospitalId;
            const hospital = await Hospital.findById({ _id: hospital_id });
            res.send(hospital);
        } catch (err) {
            return res.status(400).send({ error: 'Ocorreu um err nessa bosta: ' + err })
        }

    },
}