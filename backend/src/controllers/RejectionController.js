const Solicitation = require("../models/Solicitation");

module.exports = {
  async store(req, res) {
    const { solicitation_id } = req.params;

    const solicitation = await Solicitation.findById(solicitation_id).populate(
      "hospital"
    );

    solicitation.approved = false;

    await solicitation.save();

    return res.json(solicitation);
  },
};
