import createBareServer from '@tomphttp/bare-server-node';
import express from 'express';
import http from 'http';
import fs from "fs"

const httpServer = http.createServer();
const app = express()
const port = process.env.PORT || 3000;
const bareServer = createBareServer('/bare/', {});

// #############################################################################
// hideipnetwork service
httpServer.on('request', (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

httpServer.on('upgrade', (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'hideip.network')
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use('/', express.static('public', options))


httpServer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// module.exports = app