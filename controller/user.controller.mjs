import userServices from "../services/user.services.mjs";

class UserController {
    async signin(req, res) {
        const data = await userServices.signIn(req.body)
        return res.json({ code: 200, data });
    }

    async changePwd(req, res) {
        const data = await userServices.changePwd(req.body)
        return res.json({ code: 200, data })
    }
}
export default new UserController();