const Hospital = require('../models/Hospital');

module.exports = {
    //trazer hospitais por perto em torno de 10km atraves da url(query)
    async index(req, res) {
        const { latitude, longitude } = req.query;
        const hospitais = await Hospital.find({
            location: {
                //variaveis do mongo
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