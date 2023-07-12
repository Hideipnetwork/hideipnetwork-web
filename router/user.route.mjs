import userController from "../controller/user.controller.mjs";
import express from "express";

const userRoute = express.Router();

userRoute.post("/signin", userController.signin)
userRoute.post("/changepwd",userController.changePwd)

export default userRoute;