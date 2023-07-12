import config from "../config/default.config.mjs";
import Sequelize from "sequelize";

const sequelize = new Sequelize(config.DBNAME, config.DBSEUSER, config.DBPASSWORD, {
    port: config.DBPORT,
    host: config.DBHOST,
    dialect: config.DBTYPE,
    pool: {
        max: 25,
        min: 1,
        acquire: 60000,
        idle: 10000
    },
    timezone: '+08:00'
})

export {
    sequelize,
    Sequelize
}