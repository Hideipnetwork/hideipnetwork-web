import { infoModel } from "../models/info.model.mjs";

class InfoServices {
    async getInfo() {
        return await infoModel.findAll();
    }
}

export default new InfoServices();