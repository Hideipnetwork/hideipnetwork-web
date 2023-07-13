import { infoModel } from "../models/info.model.mjs";

class InfoServices {
    async getInfo() {
        return await infoModel.findOne();
    }

    async addInfo({ title, password, bg, notify }) {
        try {
            const data = await infoModel.create({
                title,
                password,
                bg,
                notify,
                create_time: new Date(),
                update_time: new Date()
            })
            return data
        } catch (error) {

        }
    }

    async editInfo(id, data) {
        try {
            const { title, password, bg, notify } = data;
            const res = await infoModel.update({
                title,
                password,
                bg,
                notify,
            }, {
                where: {
                    id
                }
            })
            return res
        } catch (error) {

        }
    }
}

export default new InfoServices();