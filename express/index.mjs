import express from 'express';
import bodyParser from "body-parser";
import { expressjwt } from "express-jwt";
import cors from "cors";
import { HttpError, Http404, Http500 } from '../filters/http.error.mjs';
import config from "../config/default.config.mjs";
import router from "../router/index.mjs";
import { sequelize } from "../database/sequelize.mjs";
import { whiteList } from "../config/whiteList.mjs"


const app = express();
const secretKey = "jesmora-hnet"

app.use(cors())
app.use(config.WEBDIR, express.static('public'));
app.use(config.ADMINDIR, express.static('dashboard'));
app.use(bodyParser())
app.use("/api/v1", expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [...whiteList] }), router)
app.use("*", HttpError)
app.use("*",Http404)
app.use("*",Http500)
app.use((req, res, next) => { res.set('x-timestamp', Date.now()), res.set('x-powered-by', 'hideip.network'), next() });
sequelize.sync();


export default app;