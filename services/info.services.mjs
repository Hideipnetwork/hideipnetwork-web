import { infoModel } from "../models/info.model.mjs";
import { Base64 } from 'js-base64';
class InfoServices {
    async getInfo() {
        try {
            return await infoModel.findOne();
        } catch (error) {

        }
    }

    async addInfo({ title, password, bg, notify, keywords, content, placeholder }) {
        try {
            const pwd = Base64.encode(password)
            const data = await infoModel.create({
                title,
                password: pwd,
                bg,
                notify,
                keywords,
                content,
                placeholder,
                create_time: new Date(),
                update_time: new Date()
            })
            return data
        } catch (error) {

        }
    }

    async editInfo(id, data) {
        try {
            const { title, password, bg, notify, keywords, content, placeholder } = data;
            const pwd = Base64.encode(password)
            const res = await infoModel.update({
                title,
                password: pwd,
                bg,
                notify,
                keywords,
                content,
                placeholder
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