import express from 'express';
import config from "../config/default.config.mjs";
import defaultBare from "./bs.default.mjs";
import socksBare from "./bs.socks5.mjs";
import {handle404} from "../middlewares/404.error.mjs"

let bareServer = function () { };
config.MODO == "socks5" ? bareServer = socksBare : bareServer = defaultBare;

const app = express();

function authentication(req, res, next) {
    const auth_header = req.headers.authorization;
    if (!auth_header) {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.status(401).send('身份未认证');
        return
    }
    const auth = new Buffer.from(auth_header.split(' ')[1],
        'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];

    if (user === config.USERNAME && pass === config.PASSWORD) {
        // If Authorized user
        next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.status(401).send('身份认证失败');
    }
}

if (config.SECURE === "Basic"){
    console.log(`Basic Auth Enable, username: ${config.USERNAME} , password: ${config.PASSWORD}`)
    app.use(authentication);
}
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