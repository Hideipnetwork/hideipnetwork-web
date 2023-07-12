import express from 'express';
import siteRoute from "./site.route.mjs";
import userRoute from "./user.route.mjs"

const router = express.Router();

router.use(siteRoute)
router.use(userRoute)


export default router;