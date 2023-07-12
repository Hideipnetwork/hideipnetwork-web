import config from "../config/default.config.mjs";
import defaultBare from "./bs.default.mjs";
import socksBare from "./bs.socks5.mjs";
import app from "../express/index.mjs";

let bareServer = function () { };
config.MODO == "socks5" ? bareServer = socksBare : bareServer = defaultBare;

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