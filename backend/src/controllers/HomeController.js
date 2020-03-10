const Hospital = require('../models/Hospital');

module.exports = { //quando o hospital está logado, traz todas as informações
    async home(req, res) {
        const hospital_id = req.hospitalId;
        const hospital = await Hospital.findById({ _id: hospital_id });
        res.json(hospital);
    },
}