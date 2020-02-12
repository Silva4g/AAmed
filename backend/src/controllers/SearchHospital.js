const Hospital = require('../models/Hospital');
// const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(req, res) {
        const { latitude, longitude } = req.query;
        const hospitais = await Hospital.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return res.json({ hospitais });
    }
}