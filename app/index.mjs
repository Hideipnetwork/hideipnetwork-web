import http from 'node:http';
import * as bare from "../server/bs.index.mjs";

const httpServer = http.createServer();

httpServer.on('request', bare.sourceRequest);

httpServer.on('upgrade', bare.sourceUpgrade);

export default httpServer;