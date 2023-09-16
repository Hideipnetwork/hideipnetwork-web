import infoController from "../controller/info.controller.mjs";
import express from "express";

const infoRoute = express.Router();

infoRoute.get("/info", infoController.getInfo)
infoRoute.put("/info/:id", infoController.editInfo)
infoRoute.post("/info", infoController.addInfo)
infoRoute.post("/checkPwd", infoController.checkPassword)

export default infoRoute;