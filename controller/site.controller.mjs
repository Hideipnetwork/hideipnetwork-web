import SiteServices from "../services/site.services.mjs";

class SiteController {
    async addSite(req, res) {
        const data = await SiteServices.addSite(req.body);
        return res.json({ code: 200, data });
    }

    async delSite(req, res) {
        const data = await SiteServices.delSite(req.params.id);
        return res.json({ code: 200, data });
    }

    async editSite(req, res) {
        const data = await SiteServices.editSite(req.params);
        return res.json({ code: 200, data });
    }

    async getSite(req, res) {
        const data = await SiteServices.getSite();
        return res.json({ code: 200, data });
    }
}

export default new SiteController();