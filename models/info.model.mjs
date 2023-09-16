import * as sql from "../database/sequelize.mjs";

export const infoModel = sql.sequelize.define('hnet_info', {
    id: {
        type: sql.Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    title: sql.Sequelize.STRING(255),
    password: sql.Sequelize.STRING(255),
    placeholder: sql.Sequelize.STRING(255),
    bg: sql.Sequelize.STRING(255),
    notify: sql.Sequelize.STRING(255),
    keywords: sql.Sequelize.STRING(255),
    content: sql.Sequelize.STRING(255),
    ispwd: sql.Sequelize.BOOLEAN(true),
    create_time: sql.Sequelize.DATE,
    update_time: sql.Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});