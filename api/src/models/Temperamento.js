const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperamento', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        idTemp: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
        }
    });
};