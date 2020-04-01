const Hospital = require("../models/Hospital");

module.exports = {
  //trazer hospitais por perto em torno de 10km atraves da url(query)
  async index(req, res) {
    try {
      // const { latitude, longitude } = req.query;
      // const { hospital } = req.headers;
      const hospitais = await Hospital.find();

      return res.json({hospitais});
    } catch (err) {
      return res
        .status(400)
        .send({ error: "Erro na busca de hospitais: " + err });
    }
  }
};

// tirei só para teste!!!!
// {
//   $and: [{ _id: { $ne: hospital } }],
//   location: {
//     //variaveis do mongo
//     $near: {
//       $geometry: {
//         type: "Point",
//         coordinates: [longitude, latitude]
//       },
//       $maxDistance: 10000
//     }
//   }
// }
