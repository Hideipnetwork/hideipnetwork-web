import infoController from "../controller/info.controller.mjs";
import express from "express";

const infoRoute = express.Router();

infoRoute.get("/getInfo", infoController.getInfo)
infoRoute.put("/editInfo/:id", infoController.editInfo)
infoRoute.post("/addInfo", infoController.addInfo)

export default infoRoute;