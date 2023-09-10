import userServices from "../services/user.services.mjs";

class UserController {
    async signin(req, res) {
        const data = await userServices.signIn(req.body)
        return res.json(data);
    }

    async changePwd(req, res) {
        const data = await userServices.changePwd(req.params.id, req.body)
        return res.json(data)
    }
}
export default new UserController();