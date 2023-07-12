import SiteController from "../controller/site.controller.mjs";
import express from 'express';

const SiteRoute = express.Router();

SiteRoute.post('/addSite', SiteController.addSite)
SiteRoute.delete('/delSite/:id', SiteController.delSite)
SiteRoute.put('/editSite/:id/:status', SiteController.editSite)
SiteRoute.get('/getSite', SiteController.getSite)

export default SiteRoute;