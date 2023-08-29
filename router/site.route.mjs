import siteController from "../controller/site.controller.mjs";
import express from 'express';

const siteRoute = express.Router();

siteRoute.post('/site', siteController.addSite)
siteRoute.delete('/site/:id', siteController.delSite)
siteRoute.put('/site/:id/:status', siteController.editSite)
siteRoute.get('/site', siteController.getSite)
siteRoute.get('/checkSite', siteController.checkSite)

export default siteRoute;