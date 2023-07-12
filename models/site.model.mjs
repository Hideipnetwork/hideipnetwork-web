import * as sql from "../database/sequelize.mjs";

export const site = sql.sequelize.define('site', {
    id: {
        type: sql.Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    website: sql.Sequelize.STRING(255), // website
    name: sql.Sequelize.STRING(255), // 
    status: sql.Sequelize.BOOLEAN(true), // website status
    remark: sql.Sequelize.STRING(255),
    create_time: sql.Sequelize.DATE,
    update_time: sql.Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});

