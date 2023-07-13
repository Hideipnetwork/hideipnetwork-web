import siteController from "../controller/site.controller.mjs";
import express from 'express';

const siteRoute = express.Router();

siteRoute.post('/addSite', siteController.addSite)
siteRoute.delete('/delSite/:id', siteController.delSite)
siteRoute.put('/editSite/:id/:status', siteController.editSite)
siteRoute.get('/getSite', siteController.getSite)
siteRoute.get('/checkSite', siteController.checkSite)

export default siteRoute;