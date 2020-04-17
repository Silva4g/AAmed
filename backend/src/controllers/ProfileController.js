const Hospital = require("../models/Hospital");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.json");

module.exports = {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  async index(req, res) {
    try {
      const { token_access, id_hospital } = req.cookies;
      let hospital;
      if (id_hospital.match(/^[0-9a-fA-F]{24}$/)) {
        hospital = await Hospital.findById(id_hospital);
      }
      if (!hospital) {
        return res.status(400).send({ error: "Hospital não autenticado" });
      }

      const decoded = jwt.verify(token_access, config.secret);
      if (!decoded) {
        return res.status(401).send({ error: "Hospital não autenticado" });
      }
      return res.json({ hospital });
    } catch (error) {
      return res.status(401).send({ error: `Erro: ${error}` });
    }
  },
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  async logout(req, res) {
    try {
      req.headers.authorization = `Bearer ${req.cookies.token_access}`;
      const { token_access, id_hospital } = req.cookies;
      const hospital = await Hospital.findById(id_hospital);

      if (!hospital) {
        return res.status(400).send({ error: "Hospital não encontrado" });
      }
      if (!jwt.verify(token_access, config.secret)) {
        return res.status(401).send({ error: `Hospital não autenticado` });
      }
      res.clearCookie("token_access");
      res.clearCookie("id_hospital");
      res.removeHeader("id");
      return res.status(200).end();
    } catch (error) {
      return res.status(400).send({ error: `Erro: ${error}` });
    }
  },
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  async isLogged(req, res) {
    try {
      const { token_access, id_hospital } = req.cookies;
      const hospital = await Hospital.findById(id_hospital);

      if (!hospital) {
        return res.status(401).send({ error: "Hospital não encontrado!" });
      }
      if (!jwt.verify(token_access, config.secret)) {
        return res.status(401).send({ error: "Hospital não autenticado!" });
      }
      res.setHeader("id", hospital._id);
      return res.json({ auth: "isAuth" });
    } catch (error) {
      return res.status(400).send({ error: `Erro: ${error}` });
    }
  },
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  async sendToken(req, res) {
    try {
      const { token_access } = req.cookies;
      if (!jwt.verify(token_access, config.secret)) {
        return res.status(401).send({ error: "Hospital não autenticado!" });
      }
      res.setHeader("tk_acc", token_access);
      return res.status(200).end();
    } catch (error) {
      return res.status(400).send({ error: `Erro: ${error}` });
    }
  },
};
