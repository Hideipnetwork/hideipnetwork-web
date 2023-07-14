import infoServices from "../services/info.services.mjs";

class InfoController {
    async getInfo(req, res) {
        const data = await infoServices.getInfo();
        res.json({ code: 200, data })
    }

    async editInfo(req, res) {
        const data = await infoServices.editInfo(req.params.id, req.body)
        return res.json({ code: 200, data })
    }

    async addInfo(req, res) {
        const data = await infoServices.addInfo(req.body);
        res.json({ code: 200, data })
    }
}

export default new InfoController();