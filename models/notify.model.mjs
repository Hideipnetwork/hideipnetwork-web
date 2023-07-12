import * as sql from "../database/sequelize.mjs";

export const notify = sql.sequelize.define('notify', {
    id: {
        type: sql.Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    message: sql.Sequelize.STRING(255), // message
    create_time: sql.Sequelize.DATE,
    update_time: sql.Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});