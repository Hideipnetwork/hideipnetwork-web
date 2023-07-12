import express from 'express';
import bodyParser from "body-parser";
import { handle404 } from "../filters/404.error.mjs";
import { handle500 } from "../filters/500.error.mjs";
import config from "../config/default.config.mjs";
import router from "../router/index.mjs";
import { sequelize } from "../database/sequelize.mjs";


const app = express();

app.use(config.WEBDIR, express.static('public'));
app.use(bodyParser())
app.use("/api/v1", router)
app.use("*", handle404)
app.use("*", handle500)
app.use((req, res, next) => { res.set('x-timestamp', Date.now()), res.set('x-powered-by', 'hideip.network'), next() });
sequelize.sync();

export default app;