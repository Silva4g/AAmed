const Med = require('../models/Med');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(request, response) {
        const meds = await Med.find();

        return response.json(meds);
    },
    async store(request, response) {
        const { hospital_username, hosps, latitude, longitude } = request.body;

        const med = await Med.findOne({ hospital_username });

        if (!med) {
            //precisa pegar o nome e as outras especificações

            const hospsArray = parseStringArray(hosps);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            const med = await Med.create({
                hospital_username,
                name,
                hosps: hospsArray,
                location,
            })
        };
        return response.json(med);
    },
    async update(request, response) {

    },
    async destroy(request, response) {

    }
}