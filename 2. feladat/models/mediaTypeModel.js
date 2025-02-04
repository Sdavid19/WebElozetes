const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const MediaType = sequelize.define("media_types", {
    MediaTypeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

module.exports = MediaType;
