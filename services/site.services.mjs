import { siteModel } from "../models/site.model.mjs";
import { disableWebsite, enableWebsite } from "../utils/ban.mjs";

class SiteServices {
    async addSite(data) {
        try {
            const { website, sitename, status, remark, favicon } = data;
            const res = await siteModel.findOrCreate({
                where: {
                    website
                },
                defaults: {
                    website,
                    sitename,
                    status,
                    remark,
                    favicon,
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
            const data = await siteModel.destroy({
                where: {
                    id
                }
            })
            res.status ? await disableWebsite(res.website) : await enableWebsite(res.website);
            return data;
        } catch (error) {

        }
    }

    async editSite(id, params) {
        try {
            const { website, sitename, status, remark } = params;
            const data = await siteModel.update({
                status,
                website,
                sitename,
                remark,
                update_time: new Date(),
            }, {
                where: {
                    id
                }
            })
            status ? await disableWebsite(website) : await enableWebsite(website);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getSite(page, size) {
        const data = await siteModel.findAll({
            offset: Number((page - 1) * size),
            limit: Number(size),
            order: [
                ['create_time', 'DESC'],
            ]
        })
        const total = await siteModel.count();
        return { data, total };
    }

    async checkSite(params) {
        try {
            const { text } = params
            const data = await siteModel.findOne({
                where: {
                    website: text
                }
            })
            if (data !== null && data.status) {
                return { isBan: true, banSite: text }
            } else {
                return { isBan: false, banSite: text }
            }
        } catch (error) {

        }
    }
}

export default new SiteServices();
