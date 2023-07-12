import { userModel } from "../models/user.model.mjs";
import jwt from "jsonwebtoken";

const secretKey = "jesmora-hnet"
class UserServices {
    async signIn(data) {
        const { username, password } = data
        if (!username && !password) return { code: 200, msg: "username or password is null", data: {} };
        const token = jwt.sign({ username: username, isAdmin: true }, secretKey, { expiresIn: '1h' })
        await userModel.findOrCreate({
            where: {
                username
            },
            defaults: {
                username,
                password,
                isAdmin: true,
                create_time: new Date(),
                update_time: new Date()
            }
        })
        return { token, username, isAdmin: true };
    }
}

export default new UserServices();
