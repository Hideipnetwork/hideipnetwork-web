import express from 'express';
import config from "../config/default.config.mjs";
import defaultBare from "./bs.default.mjs";
import socksBare from "./bs.socks5.mjs";
import {handle404} from "../middlewares/404.error.mjs"

let bareServer = function () { };
config.MODO == "socks5" ? bareServer = socksBare : bareServer = defaultBare;

const app = express();

app.use(config.WEBDIR, express.static('public'));
app.use("*",handle404)
app.use((req, res, next) => {
    res.set('x-timestamp', Date.now())
    res.set('x-powered-by', 'hideip.network')
    next();
});

const sourceRequest = (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
    } else {
        app(req, res);
    }
}

const sourceUpgrade = (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
}

export {
    bareServer,
    sourceRequest,
    sourceUpgrade
}