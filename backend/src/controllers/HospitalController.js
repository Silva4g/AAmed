const Hospital = require('../models/Hospital');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const cep = require('cep-promise');

module.exports = {
    async index(req, res){
        const hospitais = await Hospital.find();
        return res.send(hospitais);
    },
    async store(req, res) { //cadastro de hospital
        const { email, password, latitude, longitude, name, phone, cnpj, cnes, cep_hospital } = req.body;

        try {
            //verificação se ja tem algo no banco
            if (await Hospital.findOne({ email })) return res.status(400).send({ error: 'Hospital já cadastrado' });
            if (await Hospital.findOne({ cnes })) return res.status(400).send({ error: 'Hospital já cadastrado' });
            if (await Hospital.findOne({ cnpj })) return res.status(400).send({ error: 'Hospital já cadastrado' });

            const location = {//deixar em array a latitude e longitude (PointSchema)
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            //api de cep
            const { city, state, street, neighborhood } = await cep(cep_hospital).catch(err => { return res.status(400).send({error: 'Cep inválido'}) });
            
            const address = { //deixar em array o endereço (AddressSchema)
                city,
                state,
                street,
                neighborhood,
                cep: cep_hospital
            };

            const hospital = await Hospital.create({
                email,
                password,
                name,
                location,
                phone,
                cnpj,
                cnes,
                address
            });
            hospital.password = undefined;
            return res.json({
                hospital,
                token: generateToken({ id: hospital.id }) //token para login
            });

        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro: ' + err })
        }
    },
    async login(req, res) { //login do hospital
        try {
            const { email, password } = req.body;
            const hospital = await Hospital.findOne({ email }).select('+password');
            //verificar se tem algo no banco
            if (!hospital) {
                return res.status(401).send({ error: 'Email e/ou senha não encontrado' });
            }
            if (!await bcrypt.compare(password, hospital.password)) {
                return res.status(401).send({ error: 'Email e/ou senha não encontrado' });
            }

            res.send({
                token: generateToken({ id: hospital.id }) //token para login
            })
        } catch (error) {
            return res.status(400).send({ error: 'Falha no login' })
        }

    },
    async update(req, res) { //atualizar dados do hospital
        try {
            const { email, password, latitude, longitude, name, phone, cnpj, cnes, city, state } = req.body;
            //esses dados não podem ser alterados
            if (email || password || cnpj || cnes) return res.status(400).send({ error: 'Esses dados não podem ser atualizados' });
            
            const hospital = await Hospital.findByIdAndUpdate(req.params.id, {
                latitude,
                longitude,
                name,
                phone,
                state,
                city,
            }, { new: true });
            return res.json(hospital);
        } catch (err) {
            return res.status(400).send({ error: 'Falha na atualização do hospital' })
        }
    },
}