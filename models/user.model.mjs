import * as sql from "../database/sequelize.mjs";

export const userModel = sql.sequelize.define('hnet_user', {
    id: {
        type: sql.Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    username: sql.Sequelize.STRING(255), // username
    password: sql.Sequelize.STRING(255), // password
    isAdmin: sql.Sequelize.BOOLEAN(true), // isadmin
    create_time: sql.Sequelize.DATE,
    update_time: sql.Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});