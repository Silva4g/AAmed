const Solicitation = require("../models/Solicitation");

module.exports = {
  async index(req, res) {
    const solicitation = await Solicitation.find()
      .populate("hospital")
      .populate("user")
      .exec();

    return res.json(solicitation);
  },

  async store(req, res) {
    const { user_id } = req.headers;
    const { hospital_id } = req.params;
    const { description } = req.body;

    const solicitation = await Solicitation.create({
      user: user_id,
      hospital: hospital_id,
      description,
    });

    await solicitation.populate("hospital").populate("user").execPopulate();

    return res.json(solicitation);
  },
};
