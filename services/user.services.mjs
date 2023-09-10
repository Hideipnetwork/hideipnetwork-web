import { Base64 } from "js-base64";
import { userModel } from "../models/user.model.mjs";
import jwt from "jsonwebtoken";


const secretKey = "jesmora-hnet"
class UserServices {
    async signIn(data) {
        const { username, password } = data
        if (!username && !password) return { code: 200, msg: "username or password is null", data: {} };
        const token = jwt.sign({ username: username, isAdmin: true }, secretKey, { expiresIn: '1h' })
        const res = await userModel.findOne({
            where: {
                username,
                password: Base64.decode(password),
            },
            // defaults: {
            //     username,
            //     password,
            //     isAdmin: true,
            //     create_time: new Date(),
            //     update_time: new Date()
            // }
        })
        if (res) {
            return { code: 200, data: { token, username, isAdmin: true, id: res.id } };
        } else {
            return { code: 429, msg: 'Invalid Password Or Username' }
        }
    }

    async changePwd(id, { oldPwd, newPwd }) {
        try {
            const { password } = await userModel.findOne()
            if (oldPwd != password) return { code: 429, msg: 'The old password is incorrect' }
            if (newPwd == password) return { code: 429, msg: 'The old and new passwords are the same' }
            await userModel.update({ password: newPwd }, {
                where: {
                    id
                }
            })
            return { code: 200, msg: 'password updated successfully' }
        } catch (error) {
            return { code: 500, msg: 'password updated faied' }
        }
    }
}

export default new UserServices();
