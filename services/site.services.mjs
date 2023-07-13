import { siteModel } from "../models/site.model.mjs";
import { disableWebsite, enableWebsite } from "../utils/ban.mjs";

class SiteServices {
    async addSite(data) {
        try {
            const { website, sitename, status, remark } = data;
            const res = await siteModel.findOrCreate({
                where: {
                    website
                },
                defaults: {
                    website,
                    sitename,
                    status,
                    remark,
                    create_time: new Date(),
                    update_time: new Date()
                }
            })
            status ? await disableWebsite(website) : await enableWebsite(website);
            return res;
        } catch (error) {
            return error
        }
    }

    async delSite(id) {
        try {
            const res = await siteModel.findOne({
                where: {
                    id
                }
            })
            res.status ? await disableWebsite(res.website) : await enableWebsite(res.website);
            const data = await siteModel.destroy({
                where: {
                    id
                }
            })
            return data;
        } catch (error) {

        }
    }

    async editSite({ id, status }) {
        try {
            const res = await siteModel.findOne({
                where: {
                    id
                }
            })
            res.status ? await disableWebsite(res.website) : await enableWebsite(res.website);
            const data = await siteModel.update({ status }, {
                where: {
                    id
                }
            })
            return data;
        } catch (error) {

        }
    }

    async getSite() {
        const data = await siteModel.findAll({
            offset: 0, limit: 10,
            order: [
                ['create_time', 'DESC'],
            ]
        })
        const total = await siteModel.count();
        return { data, total };
    }

    async checkSite({ website }) {
        try {
            const data = await siteModel.findOne({
                where: {
                    website
                }
            })
            return data
        } catch (error) {

        }
    }
}

export default new SiteServices();
