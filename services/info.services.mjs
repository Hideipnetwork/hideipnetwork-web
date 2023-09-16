import { infoModel } from "../models/info.model.mjs";
import { Base64 } from 'js-base64';
class InfoServices {
    async getInfo(query) {
        try {
            const data = await infoModel.findOne();
            if (query.id == '1') {
                return data
            } else if (query.id == '2') {
                delete data.dataValues.password
                return data
            } else if (query.id == '3') {
                const obj = {
                    ispwd: data.ispwd,
                }
                return obj;
            }
        } catch (error) {

        }
    }

    async addInfo({ title, password, bg, notify, keywords, content, placeholder }) {
        try {
            const pwd = Base64.encode(password)
            const ispwd = password !== '' ? true : false
            const data = await infoModel.create({
                title,
                password: pwd,
                ispwd,
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
            const ispwd = password !== '' ? true : false
            const res = await infoModel.update({
                title,
                password: pwd,
                ispwd,
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
            const pwd = Base64.encode(password)
            const data = await infoModel.findOne({
                where: {
                    password: pwd
                }
            })
            if (data) {
                return true
            } else {
                return false
            }
        } catch (error) {
        }
    }
}

export default new InfoServices();