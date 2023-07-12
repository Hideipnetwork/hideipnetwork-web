import { UserModel } from "../models/user.model.mjs";

class UserServices {
    async addUser(data) {
        const { username, password } = data
        if (!username && !password) return { code: 200, msg: "username or password is null", data: {} };
        const data = await UserModel.findOrCreate({
            where: {
                username
            },
            defaults: {
                username,
                password,
                isAdmin: true
            }
        })
        return data;
    }
}

export default new UserServices();
