import express from 'express';
import SiteRoute from "./site.route.mjs";

const router = express.Router();

router.use(SiteRoute)


export default router;