import { SiteModel } from "../models/site.model.mjs";
import { v4 as uuidv4 } from 'uuid';

class SiteServices {
    async addSite(data) {
        try {
            const { website, sitename, status, remark } = data
            const res = await SiteModel.findOrCreate({
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
            return res;
        } catch (error) {
            return error
        }
    }

    async delSite(id) {
        try {
            const data = await SiteModel.destroy({
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
            const data = await SiteModel.update({ status }, {
                where: {
                    id
                }
            })
            return data;
        } catch (error) {

        }
    }

    async getSite() {
        const data = await SiteModel.findAll()
        return data;
    }
}

export default new SiteServices();
