import siteServices from "../services/site.services.mjs";

class SiteController {
    async addSite(req, res) {
        const data = await siteServices.addSite(req.body);
        return res.json({ code: 200, data });
    }

    async delSite(req, res) {
        const data = await siteServices.delSite(req.params.id);
        return res.json({ code: 200, data });
    }

    async editSite(req, res) {
        const data = await siteServices.editSite(req.params.id,req.body);
        return res.json({ code: 200, data });
    }

    async getSite(req, res) {
        const { page, size } = req.params
        const { data, total } = await siteServices.getSite(page, size);
        return res.json({ code: 200, total, data });
    }

    async checkSite(req, res) {
        const data = await siteServices.checkSite(req.body)
        return res.json({ code: 200, data })
    }
}

export default new SiteController();