const { Router } = require("express");

const {
  HospitalController,
  SearchHospital,
  SupportController,
  UserController,
  SolicitaionController,
  ApprovalController,
  RejectionController,
  SessionController,
  ProfileController,
} = require("./controllers");
const authConfig = require("./middleware/auth");
const multer = require("multer"); //envio de arquivos
const multerConfig = require("./config/multer");

const routes = Router();

//route register hospitals
routes.post("/hospital", HospitalController.store);
//route update hospital
routes.put("/hospital/:id", authConfig.hospital, HospitalController.update);
//change password
routes.put("/change/:id", authConfig.hospital, HospitalController.change);
//delete hospital
routes.delete("/hospital/:id", authConfig.hospital, HospitalController.destroy);
// route auth hospital
routes.post("/login/hospital", SessionController.index);
//all hospitals
routes.get("/hospital", HospitalController.index);
//get one hospital
routes.get("/hosp/:id", HospitalController.list);

//route 10km distance hospital from user
routes.get("/search", SearchHospital.index);

//route register users
routes.post(
  "/user" /*, multer(multerConfig).single('avatar')*/,
  UserController.store
);
//all users
routes.get("/user", UserController.index);
//route auth user
routes.post("/login/user", UserController.login);
//route update user
routes.put("/user/:id", UserController.update);

//route register a support
routes.post("/support", SupportController.store);

//route hospital logged and user logged
//precisa ver oq fazer com esse authConfig.hospital ja que agr está com cookies
//authConfig.hospital
routes.get("/hospital/home", authConfig.hospital, ProfileController.index);
routes.get("/hospital/logout", authConfig.hospital, ProfileController.logout);
routes.get("/hospital/verify", authConfig.hospital, ProfileController.isLogged);
routes.get("/hospital/token", authConfig.hospital, ProfileController.sendToken);
//routes.get("/user/home", authConfig.user, HomeController.home);

routes.get("/hospital/solicitations", SolicitaionController.index);
routes.post("/hospital/:hospital_id/solicitation", SolicitaionController.store);

routes.get("/solicitations/:id", SolicitaionController.show);
routes.get("/solicitations/:hospital_id", SolicitaionController.verify);
routes.post(
  "/solicitations/:user_id/approvals",
  authConfig.hospital,
  ApprovalController.store
);
routes.post("/solicitations/:user_id/rejections", RejectionController.store);

module.exports = routes;
