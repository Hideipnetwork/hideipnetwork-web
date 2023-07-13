import { infoModel } from "../models/info.model.mjs";

class InfoServices {
    async getInfo() {
        return await infoModel.findAll();
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
}

export default new InfoServices();