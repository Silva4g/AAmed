const Hospital = require('../models/Hospital');

module.exports = {
    async home(req, res) {
        const hospital_id = req.hospitalId;
        const hospital = await Hospital.findById({ _id: hospital_id });
        res.json(hospital);
    },
}