import { infoModel } from "../models/info.model.mjs";
import { Base64 } from 'js-base64';
class InfoServices {
    async getInfo(query) {
        try {
            if (query.id === '1') {
                const data = await infoModel.findOne();
                return data
            } else if (query.id === '2') {
                const data = await infoModel.findOne();
                data.password !== '' ? data.password = true : data.password = false
                return data
            }
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

    async editInfo(id, params) {
        try {
            const { title, password, bg, notify, keywords, content, placeholder } = params;
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

    async checkPassword({ password }) {
        try {
            const data = await infoModel.findOne({
                where: {
                    password
                }
            })
        } catch (error) {

        }
    }
}

export default new InfoServices();