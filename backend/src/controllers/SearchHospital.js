const Med = require('../models/Med');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, hosps } = request.query;

        const hospsArray = parseStringasArray(hosps);

        const meds = await Med.find({
            hosps: {
                $in: hospsArray,
            },
            location: {
                $near: {
                    $geomatry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ meds });
    }
}